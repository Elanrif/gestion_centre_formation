package com.master.s3.gestion_centre_formation_spring.controllers;

import com.master.s3.gestion_centre_formation_spring.entities.Person;
import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;
import com.master.s3.gestion_centre_formation_spring.services.UtilisateurService;
import com.master.s3.gestion_centre_formation_spring.services.UtilisateurServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/utilisateurs")
@CrossOrigin
public class UtilisateurController {
    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/{id}")
    public Utilisateur findUtilisateurById(@PathVariable Long id) {
        return utilisateurService.findUtilisateurById(id);
    }
    @GetMapping("/findbyemail")
    public Utilisateur findOneByUsername(@RequestParam("username") String email) {
        return utilisateurService.findOneByUsername(email);
    }
    @GetMapping
    public List<Utilisateur> findAllUtilisateurs() {
        return utilisateurService.findAllUtilisateurs();
    }
    @PostMapping("/login")
    public Utilisateur login(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.login(utilisateur);
    }
    @PostMapping
    public Utilisateur saveUtilisateur(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.saveUtilisateur(utilisateur);
    }

    @PostMapping("/individu-form")
    public Utilisateur saveIndividuForm(@RequestBody Utilisateur utilisateur, @RequestParam Long formationId) {
        return utilisateurService.saveIndividuForm(utilisateur,formationId);
    }
    @GetMapping("/follow")
    public Utilisateur userFollowFormation(@RequestParam Long utilisateurId, @RequestParam Long formationId) {
        return utilisateurService.userFollowFormation(utilisateurId,formationId);
    }
    @GetMapping("/unfollow")
    public Utilisateur userunFollowFormation(@RequestParam Long utilisateurId,@RequestParam Long formationId) {
        return utilisateurService.userunFollowFormation(utilisateurId,formationId);
    }

    @PutMapping
    public Utilisateur updateUtilisateur(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.updateUtilisateur(utilisateur);
    }
    @DeleteMapping("/{id}")
    public void deleteUtilisateurById(@PathVariable Long id) {
            utilisateurService.deleteUtilisateurById(id);
    }

    @PostMapping("/image")
    public void addImage(
            @RequestParam("id") Long id,
            @RequestParam(required = false,value="image") MultipartFile file /* = false , pour ne pas avoir d'erreur si on envoie pas de photo*/
    ) throws IOException {

        utilisateurService.addImage(id,file);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<Resource> getImage(@PathVariable Long id){
        return utilisateurService.getImage(id);
    }


}
