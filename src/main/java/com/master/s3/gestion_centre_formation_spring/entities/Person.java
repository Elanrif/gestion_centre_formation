package com.master.s3.gestion_centre_formation_spring.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
@Entity
public class Person implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private String nom ;
    private String prenom ;
    @Column(unique = true,name="email")
    //on ajoute ce champ username(qui est l'email) ,car c'est obligatoire de redefinir une methode @getUsername de UserDetails
    private String username  ;
    private String tel ;
    private String image ;
    private String password ;
    @Enumerated(EnumType.STRING)
    private Role role ;
    private Boolean exterieur = false ;
    @Column(length=1000000)
    private String remarque ;
    @Column(length=1000000)
    private String description ;
    @Column(length=1000000)
    private String competence ;
    boolean active=true;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private Ville ville ;


    @JsonIgnore
    @OneToMany(mappedBy = "formateur",
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private List<Formation> formations ;

    @JsonIgnore
    @OneToMany(mappedBy = "formateur",
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private List<Evaluation> evaluations;

    /* pour éviter une erreur lors de la désérialisation */
    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities=new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role.toString()));
        return authorities;
    }


    @Override
    public boolean isAccountNonExpired() {return true;}
    @Override
    public boolean isAccountNonLocked() {return true;}
    @Override
    public boolean isCredentialsNonExpired() {return true;}
    @Override
    public boolean isEnabled() {return this.active;}


    public void addFormation(Formation formation){
        formations.add(formation);
        formation.setFormateur(this);
    }

    public void removeFormation(Formation formation){
        formations.add(formation);
        formation.setFormateur(null);
    }

    public void addEvaluation(Evaluation evaluation){
        evaluations.add(evaluation);
        evaluation.setFormateur(this);
    }

    public void removeEvaluation(Evaluation evaluation){
        evaluations.remove(evaluation);
        evaluation.setFormateur(null);
    }

    @PreRemove
    private void preRemove(){
        List<Formation> formationsCopy = new ArrayList<>(formations);
        List<Evaluation> evaluationsCopy = new ArrayList<>(evaluations);

        if (formations != null) {
            for (Formation formation : formationsCopy) {
                /* on détach les synchronisation du formateur avec tout les formations auquels ils est associés.*/
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
