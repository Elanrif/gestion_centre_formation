package com.master.s3.gestion_centre_formation_spring.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
@Entity
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id ;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    //pedagogique
    private String qualitepeda ;
    private String rythme ;
    private String supportcourstp;
    private String maitrisesujet;
    private Integer note ;
    @Column(length=1000000)
    private String remarque ;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private Utilisateur utilisateur;

    @ManyToOne(
            cascade = {
                    CascadeType.MERGE,
                    CascadeType.PERSIST
            })
    private Person formateur ;


}
