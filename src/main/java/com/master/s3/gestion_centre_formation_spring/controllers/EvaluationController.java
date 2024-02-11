package com.master.s3.gestion_centre_formation_spring.controllers;

import com.master.s3.gestion_centre_formation_spring.entities.Evaluation;
import com.master.s3.gestion_centre_formation_spring.entities.Formation;
import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;
import com.master.s3.gestion_centre_formation_spring.services.EvaluationService;
import com.master.s3.gestion_centre_formation_spring.services.FormationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/evaluations")
@CrossOrigin
public class EvaluationController{
    @Autowired
    private EvaluationService evaluationService ;

    @PostMapping
    public Evaluation addEvaluation(@RequestBody Evaluation evaluation ) {
        return evaluationService.saveEvaluation(evaluation);
    }

    @DeleteMapping("/{id}")
    public void deleteEvaluation(@PathVariable("id") Long evaluationId ) {
         evaluationService.deleteEvaluation(evaluationId);
    }


    @GetMapping
    public List<Evaluation> findAllEvaluations() {
        return evaluationService.findAllEvaluations();
    }

    @GetMapping("/email-code/{id}")
    public ResponseEntity<String> sendEmailCode(@PathVariable Long id) {
        // Appel de la méthode sendEmailCode de votre service
        // Assumez que la méthode retourne un message sous forme de chaîne de caractères
        Utilisateur user  =  evaluationService.sendEmailCode(id);

        // Retournez ResponseEntity avec le code HTTP 200 et le message
        return ResponseEntity.status(HttpStatus.OK).body(" le code a été envoyé avec succès à " + user.getUsername());
    }
    @GetMapping("/user/{userId}")
    public List<Evaluation> findUser(@PathVariable  Long userId) {
        return evaluationService.findUser(userId);
    }
    @GetMapping("/formateur/{formateurId}")
    public List<Evaluation> findFormateur(@PathVariable Long formateurId) {
        return evaluationService.findFormateur(formateurId);
    }
}
