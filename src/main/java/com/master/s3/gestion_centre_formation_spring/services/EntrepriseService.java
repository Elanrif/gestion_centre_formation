package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Entreprise;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface EntrepriseService {
    public Entreprise findEntrepriseById(Long id);
    public List<Entreprise> findAllEntreprises();
    public Entreprise saveEntreprise(Entreprise entreprise) ;
    public Entreprise updateEntreprise(Entreprise entreprise) ;
    public void deleteEntrepriseById(Long id) ;
    public String deleteSynchEntrepriseFormation(Long entrepriseId,Long formationId);
    public void addImage(Long id, MultipartFile file) throws IOException;
    public ResponseEntity<Resource> getImage(Long id);
}
