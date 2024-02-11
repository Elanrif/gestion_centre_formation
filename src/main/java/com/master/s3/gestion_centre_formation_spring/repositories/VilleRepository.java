package com.master.s3.gestion_centre_formation_spring.repositories;

import com.master.s3.gestion_centre_formation_spring.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VilleRepository extends JpaRepository<Ville,Long> {
    public Ville findByNomContaining(String name);
}
