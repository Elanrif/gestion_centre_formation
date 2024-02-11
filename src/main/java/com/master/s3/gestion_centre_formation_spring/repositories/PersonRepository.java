package com.master.s3.gestion_centre_formation_spring.repositories;

import com.master.s3.gestion_centre_formation_spring.entities.Person;
import com.master.s3.gestion_centre_formation_spring.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person,Long> {
    public Person findByUsername(String email);
    List<Person> findByRole(Role role);
}
