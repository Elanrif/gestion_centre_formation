package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Entreprise;
import com.master.s3.gestion_centre_formation_spring.entities.Formation;
import com.master.s3.gestion_centre_formation_spring.entities.Person;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;

public interface FormationService {
    public Formation findFormationById(Long id);
    public List<Formation> getUtilisateur(Long id);
    public List<Formation> findAllFormations();
    public List<Formation> formateur(Long formateurId);
    public Formation saveFormation(Formation formation) ;
    public Formation addFormateur(Long formateurId,Long formationId) ;
    public Formation editPlanification(Long formationId, LocalDate startDate, LocalDate finishDate) ;
    public Formation addEntreprise(Long entrepriseId,Long formationId) ;
    public Formation addEntrepriseWithListEntreprises(List<Long> entrepriseIds,Long formationId) ;
    public Formation updateFormation(Formation formation) ;
    public Formation updateCodeEvalAndSendEmail(Long code,Long id);
    public void deleteFormationById(Long id) ;
    public void addImage(Long id,MultipartFile file) throws IOException;
    public ResponseEntity<Resource> getImage(Long id);
}
