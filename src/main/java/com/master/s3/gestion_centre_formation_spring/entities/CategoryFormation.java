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
@Table(name="categorie")
public class CategoryFormation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;

    @JsonIgnore
    @OneToMany(
            mappedBy = "category",
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST,
            }
    )
    private List<Formation> formations = new ArrayList<>() ;

    /* helpers methodes pour mieux aider la synchronisation, il sont définir conventionnellement
    * sur l'entité parent.
    * */
    public void addFormation(Formation formation){
        formations.add(formation);
        formation.setCategory(this);
    }

    public void removeFormation(Formation formation){
        formations.remove(formation);
        formation.setCategory(null);
    }

    /* sera appelé lorsque on supprime une category */
    @PreRemove
    private void preRemove() {

        /*IMPORTANT : tout les LIST<?Entity> entities ,
        * entities est l'ensemble des entités qui on des relations avec la category*/

        /*on doit créer une copie de la liste pour éviter la ConcurrentModificationException*/
        List<Formation> formationsCopy = new ArrayList<>(formations);

        if (formations != null) {
            for (Formation formation : formationsCopy) {
                /* on détach les synchronisation*/
                removeFormation(formation);
            }
        }
    }

}
