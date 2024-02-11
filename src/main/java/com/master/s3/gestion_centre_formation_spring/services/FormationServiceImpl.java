package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.*;
import com.master.s3.gestion_centre_formation_spring.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FormationServiceImpl implements FormationService{
    @Autowired
    private FormationRepository formationRepository ;
    @Autowired
    private PersonRepository personRepository ;
    @Autowired
    private EntrepriseRepository entrepriseRepository ;
    @Autowired
    private VilleRepository villeRepository ;
    @Autowired
    private UtilisateurRepository utilisateurRepository ;
    @Autowired
    private CategoryFmRepository categoryFmRepository ;

    @Autowired
    private EmailService emailService ;

    //changement de port dynamic voir dossier .properties
    @Value("${server.port}")
    private int port ;
    @Value("${pathImage}")
    private String path_image ;


    @Override
    public Formation findFormationById(Long id) {
        return formationRepository.findById(id).get();
    }

    @Override
    public List<Formation> getUtilisateur(Long id) {
        Utilisateur utilisateur = utilisateurRepository.findById(id).orElse(null);

        return utilisateur.getFormations();
    }

    @Override
    public List<Formation> findAllFormations() {
        return formationRepository.findAll();
    }

    @Override
    public List<Formation> formateur(Long formateurId) {
        Person formateur = personRepository.findById(formateurId).orElse(null) ;
        return formateur.getFormations();
    }

    @Override
    public Formation saveFormation(Formation formation) {

        if(formation.getVille().getId() != null){
            Ville existingVille =  villeRepository.findById(formation.getVille().getId()).orElse(null);

            if(existingVille != null){
                existingVille.addFormation(formation);
            }
        }

        if(formation.getCategory().getId() != null){
            CategoryFormation existingCategory =  categoryFmRepository.findById(formation.getCategory().getId()).orElse(null);

            if(existingCategory != null){
                existingCategory.addFormation(formation);
            }
        }


        /* enregistrera ou mettra à jour automatiquement la category correspondante grâce aux type Cascade*/
        return formationRepository.save(formation);
    }

    @Override
    public Formation addFormateur(Long formateurId, Long formationId) {
        Formation formation = formationRepository.findById(formationId).get();
        Person formateur = personRepository.findById(formateurId).orElse(null);

        if(formateur.getRole() == Role.ROLE_FORMATEUR && formation != null)
        {
           formateur.addFormation(formation);
            return  formationRepository.save(formation);
        }

        return  null;
    }

    @Override
    public Formation editPlanification(Long formationId, LocalDate startDate, LocalDate finishDate) {
        Formation formation = formationRepository.findById(formationId).get();
        formation.setStartDate(startDate);
        formation.setFinishDate(finishDate);

        return  formationRepository.save(formation);

    }

    @Override
    public Formation addEntreprise(Long entrepriseId, Long formationId) {

        Formation formation = formationRepository.findById(formationId).get();
        Entreprise entreprise = entrepriseRepository.findById(entrepriseId).orElse(null);

        if(entreprise != null && formation != null)
        {
            entreprise.addFormation(formation);
        }
        return formationRepository.save(formation) ;
    }

    @Override
    public Formation addEntrepriseWithListEntreprises(List<Long> entrepriseIds, Long formationId) {
        Formation formation = formationRepository.findById(formationId).get();

        if (formation != null) {

            List<Entreprise> entreprises = entrepriseRepository.findAllById(entrepriseIds);

            entreprises.forEach(entreprise -> {
                entreprise.addFormation(formation);
                formationRepository.save(formation);
            });

            return formation ;
        }

        return null;
    }


    @Override
    public Formation updateFormation(Formation formation) {

        Formation existingFormation = formationRepository.findById(formation.getId()).get() ;
        Ville ville =  villeRepository.findById(formation.getVille().getId()).orElse(null);
        CategoryFormation category = categoryFmRepository.findById(formation.getCategory().getId()).orElse(null);

        if(existingFormation !=null){

          if(ville  !=null){
             //synchronisation entre la nouvelle ville et existingFormation
              ville.addFormation(existingFormation);
             }
          if(category  !=null){
                //synchronisation entre la nouvelle category et existingFormation
                category.addFormation(existingFormation);
            }

            existingFormation.setNom(formation.getNom());
            existingFormation.setProgramme(formation.getProgramme());
            existingFormation.setObjectif(formation.getObjectif());
            existingFormation.setHeure(formation.getHeure());
            existingFormation.setDedie(formation.getDedie());
            existingFormation.setCout(formation.getCout());

            return formationRepository.save(existingFormation);
        }

       // return saveFormation(formation);
        return null ;
    }

    @Override
    public Formation updateCodeEvalAndSendEmail(Long code,Long id) {
        Formation formation = formationRepository.findById(id).orElse(null);
        formation.setCode(code);

        List<Utilisateur> users = formation.getUtilisateurs() ;

        String lien = "Veuillez cliquez ici pour l'évaluation : "+
                "http://localhost:3000/formation/"+formation.getId()+"/email";
        String sub1 = "Code : " + formation.getCode();
        String sub2 = "pour le formulaire d'évaluation de votre  formateur : " + formation.getFormateur().getNom();

        if(users != null && formation.getFormateur() != null){
            users.forEach(utilisateur -> {

                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setTo(utilisateur.getUsername());
                mailMessage.setSubject( sub1 + "\n\n" + sub2 );
                mailMessage.setText(lien);

                emailService.sendEmail(mailMessage);

            });
        }

        return formationRepository.save(formation);
    }

    @Override
    public void deleteFormationById(Long id) {
        String path = path_image + id +".png" ;
        File f = new File(path) ;
        if(f.exists())
            f.delete() ;

        formationRepository.deleteById(id);
    }

    @Override
    public void addImage(Long id,MultipartFile file) throws IOException {

         Formation formation = formationRepository.findById(id).orElse(null);

        if(formation != null){

            if(file != null && !file.isEmpty()){
                String pathPhoto = path_image + id + ".png" ;
                file.transferTo(Path.of(pathPhoto));
                String urlPhoto = "http://localhost:"+port + "/formations/images/" + formation.getId() ;
                formation.setImage(urlPhoto);
            }

            formationRepository.save(formation) ;
        }
    }

    @Override
    public ResponseEntity<Resource> getImage(Long id){
        String path = path_image + id + ".png";
        FileSystemResource file = new FileSystemResource(path);
        if(!file.exists()){
            return ResponseEntity.notFound().build();
        }
        return  ResponseEntity.ok()
                .contentType(MediaType.IMAGE_PNG)
                .body(file) ;
    }

}
