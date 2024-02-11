package com.master.s3.gestion_centre_formation_spring.controllers;

import com.master.s3.gestion_centre_formation_spring.entities.Entreprise;
import com.master.s3.gestion_centre_formation_spring.repositories.EntrepriseRepository;
import com.master.s3.gestion_centre_formation_spring.services.EntrepriseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/entreprises")
@CrossOrigin
public class EntrepriseController {
    @Autowired
    private EntrepriseService entrepriseService  ;

    @GetMapping("/{id}")
    public Entreprise findEntrepriseById(@PathVariable Long id) {
        return entrepriseService.findEntrepriseById(id);
    }
    @GetMapping
    public List<Entreprise> findAllEntreprises() {
        return entrepriseService.findAllEntreprises();
    }
    @PostMapping
    public Entreprise saveEntreprise(@RequestBody Entreprise entreprise) {
        return entrepriseService.saveEntreprise(entreprise);
    }
    @PutMapping
    public Entreprise updateEntreprise(@RequestBody Entreprise entreprise) {
        return entrepriseService.updateEntreprise(entreprise);
    }
    @DeleteMapping("/{id}")
    public void deleteEntrepriseById(@PathVariable Long id) {
                entrepriseService.deleteEntrepriseById(id);
    }

    @DeleteMapping("desynch/{idE}/{idF}")
    public String deleteSynchEntrepriseFormation(@PathVariable Long idE,@PathVariable Long idF) {
       return entrepriseService.deleteSynchEntrepriseFormation(idE,idF);
    }

    @PostMapping("/image")
    public void addImage(
            @RequestParam("id") Long id,
            @RequestParam(required = false,value="image") MultipartFile file /* = false , pour ne pas avoir d'erreur si on envoie pas de photo*/
    ) throws IOException {

        entrepriseService.addImage(id,file);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<Resource> getImage(@PathVariable Long id){
        return entrepriseService.getImage(id);
    }
}
