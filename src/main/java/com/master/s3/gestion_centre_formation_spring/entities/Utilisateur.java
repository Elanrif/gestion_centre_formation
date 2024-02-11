package com.master.s3.gestion_centre_formation_spring.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
@Entity
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;
    private String prenom ;
    private LocalDate naissance;
    private String tel ;
    @Column(unique = true,name="email")
    private String username  ;
    private String image ;
    private String password ;
    @Enumerated(EnumType.STRING)
    private Role role = Role.ROLE_USER;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private Ville ville ;

    @JsonIgnore
    @OneToMany(mappedBy = "utilisateur",
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private List<Evaluation> evaluations = new ArrayList<>() ;

    @JsonIgnore
    @ManyToMany( cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    private List<Formation> formations = new ArrayList<>() ;
    /* utilisateurs et formations on une relationManyToMany , dans ce ca la moi je crée les helpers
     * méthodes tjrs dans l'entités ou il n'y a pas mappedBy
     * */

    public void addFormation(Formation formation){
        formations.add(formation);
        formation.getUtilisateurs().add(this);
    }

    public void removeFormation(Formation formation){
        formations.remove(formation);
        formation.getUtilisateurs().remove(this);
    }

    public void addEvaluation(Evaluation evaluation){
        evaluations.add(evaluation);
        evaluation.setUtilisateur(this);
    }

    public void removeEvaluation(Evaluation evaluation){
        evaluations.remove(evaluation);
        evaluation.setUtilisateur(null);
    }

    /* sera appelle lorsque on supprime un utilisateur */
    @PreRemove
    private void preRemove(){
        List<Formation> formationsCopy = new ArrayList<>(formations);
        List<Evaluation> evaluationsCopy = new ArrayList<>(evaluations);

        if (formations != null) {
            for (Formation formation : formationsCopy) {
                /* on détach les synchronisation de l'utlisateur avec tout les formations auquels ils est associés.*/
                removeFormation(formation);
            }
        }

        if (evaluations != null) {
            for (Evaluation evaluation : evaluationsCopy) {
                /* on détach les synchronisation de l'utlisateur avec tout les formations auquels ils est associés.*/
                removeEvaluation(evaluation);
            }
        }
    }

}
