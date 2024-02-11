package com.master.s3.gestion_centre_formation_spring.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
@Entity
public class Formation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    @Enumerated(EnumType.STRING)
    private Dedie dedie;
    private Integer heure ;
    private String nom ;
    private String image ;
    private Float cout ;
    @Column(length=1000000)
    private String objectif ;
    @Column(length=1000000)
    private String programme ;
    /* code d'evaluation*/
    private Long code ;
    /* pas ..LocalDateTime, on aura un problème lors de la deserialisation , l'objet request.date et LocalDateTime ne seront pas compatible;*/
    private LocalDate startDate ;
    private LocalDate finishDate ;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private Ville ville ;

    @ManyToOne( cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    private Person formateur ;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private CategoryFormation category;

    @ManyToMany(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    @JoinTable(
            name="formation_entreprises",
            joinColumns = @JoinColumn(name="formations_id"),
            inverseJoinColumns = @JoinColumn(name="entreprises_id")
            /*je nomme le 'name' comme je veux, respectivement, il referencera la table FORMATION et ENTREPRISE*/

    )
    private List<Entreprise> entreprises = new ArrayList<>()  ;

    @ManyToMany(mappedBy = "formations",
            cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
            })
    private List<Utilisateur> utilisateurs = new ArrayList<>() ;


    public void addUtilisateur(Utilisateur utilisateur){
        utilisateurs.add(utilisateur);
        utilisateur.getFormations().add(this);
    }

    public void removeUtilisateur(Utilisateur utilisateur){
        utilisateurs.remove(utilisateur);
        utilisateur.getFormations().remove(this);
    }

    public void addEntreprise(Entreprise entreprise){
        entreprises.add(entreprise);
        entreprise.getFormations().add(this);
    }

    public void removeEntreprise(Entreprise entreprise){
        entreprises.remove(entreprise);
        entreprise.getFormations().remove(this);
    }

    /* sera appelle lorsque on supprime un utilisateur */
    @PreRemove
    private void preRemove(){
        List<Utilisateur> utilisateursCopy = new ArrayList<>(utilisateurs);
        List<Entreprise> entreprisesCopy = new ArrayList<>(entreprises);

        if (utilisateurs != null) {
            for (Utilisateur utilisateur : utilisateursCopy) {
                /* on détach les synchronisation de l'utlisateur avec tout les formations auquels ils est associés.*/
                removeUtilisateur(utilisateur);
            }
        }
        if (entreprises != null) {
            for (Entreprise entreprise : entreprisesCopy) {
                /* on détach les synchronisation de l'utlisateur avec tout les formations auquels ils est associés.*/
                removeEntreprise(entreprise);
            }
        }
    }
}
