package com.master.s3.gestion_centre_formation_spring.repositories;

import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur,Long> {
    public Utilisateur findOneByUsername(String email);
}
