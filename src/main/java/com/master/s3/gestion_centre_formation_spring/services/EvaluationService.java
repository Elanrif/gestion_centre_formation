package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Evaluation;
import com.master.s3.gestion_centre_formation_spring.entities.Person;
import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;

import java.util.List;

public interface EvaluationService {
    Evaluation saveEvaluation(Evaluation evaluation);
    void deleteEvaluation(Long evaluationId);
    List<Evaluation> findAllEvaluations();
    Utilisateur sendEmailCode(Long id);
    List<Evaluation>  findUser(Long userId);
    List<Evaluation>  findFormateur(Long formateurId);
}
