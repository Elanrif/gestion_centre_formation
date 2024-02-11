package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.*;
import com.master.s3.gestion_centre_formation_spring.repositories.EvaluationRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.PersonRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EvaluationServiceImpl implements EvaluationService{

    @Autowired
    private EvaluationRepository evaluationRepository ;
    @Autowired
    private PersonRepository personRepository ;
    @Autowired
    private UtilisateurRepository utilisateurRepository ;
    @Autowired
    EmailService emailService ;

    @Override
    public Evaluation saveEvaluation(Evaluation evaluation) {
        Person formateur = personRepository.findById(evaluation.getFormateur().getId()).orElse(null);
        Utilisateur utilisateur = utilisateurRepository.findById(evaluation.getUtilisateur().getId()).orElse(null);
        if(formateur != null && utilisateur.getRole() != null)
        {
            formateur.addEvaluation(evaluation);
            utilisateur.addEvaluation(evaluation);
            return evaluationRepository.save(evaluation);
        }
        return null;
    }

    @Override
    public void deleteEvaluation(Long evaluationId) {

        Evaluation eval = evaluationRepository.findById(evaluationId).orElse(null);
        if(eval != null){
            evaluationRepository.deleteById(evaluationId);
        }

    }

    @Override
    public List<Evaluation> findAllEvaluations() {
        return evaluationRepository.findAll();
    }

    @Override
    public Utilisateur sendEmailCode(Long id) {
        Utilisateur user = utilisateurRepository.findById(id).orElse(null);
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(user.getUsername());
        mailMessage.setSubject("Formulaire d'évaluation !");
        mailMessage.setText("Voici le code pour le formulaire de validation : "+ 4544);

        emailService.sendEmail(mailMessage);
        return user ;
    }

    @Override
    public List<Evaluation> findUser(Long userId) {
        Utilisateur utilisateur = utilisateurRepository.findById(userId).orElse(null);

        return utilisateur.getEvaluations();
    }

    @Override
    public  List<Evaluation>  findFormateur(Long formateurId) {
        Person formateur = personRepository.findById(formateurId).orElse(null);

        return formateur.getEvaluations();
    }
}
