package com.master.s3.gestion_centre_formation_spring.controllers;
import com.master.s3.gestion_centre_formation_spring.entities.Formation;
import com.master.s3.gestion_centre_formation_spring.entities.Ville;
import com.master.s3.gestion_centre_formation_spring.repositories.FormationRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.VilleRepository;
import com.master.s3.gestion_centre_formation_spring.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/formations")
@CrossOrigin
public class FormationController{

    @Autowired
    private FormationService formationService ;

    @Autowired
    private FormationRepository formationRepository ;

    @GetMapping("/{id}")
    public Formation findFormationById(@PathVariable Long id) {
        return formationService.findFormationById(id);
    }

    @GetMapping("/exist/{id}/{formId}")
    public boolean existsByUtilisateur_IdAndId(@PathVariable("id") Long utilisateurId,@PathVariable("formId") Long formationId){
         return false;
    }
    @GetMapping
    public List<Formation> findAllFormations() {
        return formationService.findAllFormations();
    }
    @GetMapping("/utilisateur/{id}")
    public List<Formation> getUtilisateur(@PathVariable("id") Long userId) {
        return formationService.getUtilisateur(userId);
    }

    @GetMapping("/formateur/{id}")
    public List<Formation> formateur(@PathVariable("id") Long formateurId) {
        return formationService.formateur(formateurId);
    }

    @PostMapping
    public Formation saveFormation(@RequestBody Formation formation) {

        return formationService.saveFormation(formation);
    }

    @PostMapping ("/add-formateur")
    public Formation addFormateur(@RequestParam Long formateurId,@RequestParam Long formationId) {
        return formationService.addFormateur(formateurId,formationId);
    }
   /* @PostMapping ("/add-entreprise")
    public Formation addEntreprise(@RequestParam Long entrepriseId, @RequestParam Long formationId) {
        return formationService.addEntreprise(entrepriseId,formationId);
    }*/
    @PostMapping ("/add-entreprise")
    public Formation addEntreprise(@RequestParam List<Long> entrepriseIds, @RequestParam Long formationId) {
        return formationService.addEntrepriseWithListEntreprises(entrepriseIds,formationId);
    }

    @GetMapping ("/planification")
    public Formation editPlanification(@RequestParam Long id, @RequestParam LocalDate startDate,LocalDate finishDate) {
        return formationService.editPlanification(id,startDate,finishDate);
    }
    @PutMapping
    public Formation updateFormation(@RequestBody Formation formation) {
        return formationService.updateFormation(formation);
    }

    @PutMapping("/generate-code")
    public Formation updateCodeEval(@RequestParam Long code,@RequestParam Long id) {
        return formationService.updateCodeEvalAndSendEmail(code,id);
    }
    @DeleteMapping("/{id}")
    public void deleteFormationById(@PathVariable Long id) {
        formationService.deleteFormationById(id);
    }

    @PostMapping("/image")
    public void addImage(
            @RequestParam("id") Long id,
            @RequestParam(required = false,value="image") MultipartFile file /* = false , pour ne pas avoir d'erreur si on envoie pas de photo*/
    ) throws IOException {

        formationService.addImage(id,file);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<Resource> getImage(@PathVariable Long id){
       return formationService.getImage(id);
    }

}
