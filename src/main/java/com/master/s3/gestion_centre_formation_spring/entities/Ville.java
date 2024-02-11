package com.master.s3.gestion_centre_formation_spring.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
@Entity
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;

    @JsonIgnore
    @OneToMany(mappedBy = "ville",
            cascade = {
            CascadeType.MERGE,
            CascadeType.PERSIST
    })
    private List<Utilisateur> utilisateurs = new ArrayList<>() ;

    @JsonIgnore
    @OneToMany(mappedBy = "ville",
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private List<Person> persons = new ArrayList<>() ;
    @JsonIgnore
    @OneToMany(mappedBy = "ville",
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private List<Formation> formations = new ArrayList<>() ;

    /* méthodes utilitaires , pour gérer la synchronisation de la ville avec les autres entités liés. */
    public void addFormation(Formation formation){
        formations.add(formation);
        formation.setVille(this);
    }

    public void editFormation(Formation existingFormation,Formation formation ,Ville existingVile){
        Ville ville  = formation.getVille() ;

        if(existingFormation.getVille()  != null){
            removeFormation(formation);
        }else{
            addFormation(formation);
        }
    }

    public void removeFormation(Formation formation){
        formations.remove(formation);
        formation.setVille(null);
    }

    public void addUtilisateur(Utilisateur utilisateur){
        utilisateurs.add(utilisateur);
        utilisateur.setVille(this);
    }
    public void removeUtilisateur(Utilisateur utilisateur){
        utilisateurs.remove(utilisateur);
        utilisateur.setVille(null);
    }

    public void addPerson(Person person){
        persons.add(person);
        person.setVille(this);
    }
    public void removePerson(Person person){
        persons.remove(person);
        person.setVille(null);
    }



    /* @PreRemove doit être unique dans une classe, sera appelée automaitquement ,
    *lorsqu'on supprime un enregistrement ville.
    *on va profiter de supprimer les réferences avec tout les entités associés à la ville.*/
    @PreRemove
    private void preRemove() {

        /*IMPORTANT : tout les LIST<?Entity> entities , entities est l'ensemble des entités qui on des relations avec la ville*/
        /* on va utiliser les helpers methodes remove... pour supprimer les références entre ville et les entités concernés. */

         /*on doit créer une copie de la liste pour éviter la ConcurrentModificationException*/
        List<Formation> formationsCopy = new ArrayList<>(formations);
        List<Utilisateur> utilisateursCopy = new ArrayList<>(utilisateurs);
        List<Person> personsCopy = new ArrayList<>(persons);

        if (formations != null) {
            for (Formation formation : formationsCopy) {
                /* on détach les synchronisation*/
               removeFormation(formation);
            }
        }

        if (utilisateurs != null) {
            for (Utilisateur utilisateur : utilisateursCopy) {
                /* on détach les synchronisation*/
                removeUtilisateur(utilisateur);
            }
        }

        if (persons != null) {
            for (Person person : personsCopy) {
                /* on détach les synchronisation*/
                removePerson(person);
            }
        }


    }


}
