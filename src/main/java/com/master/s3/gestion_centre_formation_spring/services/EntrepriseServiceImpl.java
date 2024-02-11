package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Entreprise;
import com.master.s3.gestion_centre_formation_spring.entities.Formation;
import com.master.s3.gestion_centre_formation_spring.repositories.EntrepriseRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.FormationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

@Service
public class EntrepriseServiceImpl implements EntrepriseService {
    @Autowired
    private EntrepriseRepository entrepriseRepository ;
    @Autowired
    private FormationRepository formationRepository ;

    //changement de port dynamic voir dossier .properties
    @Value("${server.port}")
    private int port ;
    @Value("${pathImageE}")
    private String path_image ;

    @Override
    public Entreprise findEntrepriseById(Long id) {
        return entrepriseRepository.findById(id).orElse(null);
    }

    @Override
    public List<Entreprise> findAllEntreprises() {
        return entrepriseRepository.findAll();
    }

    @Override
    public Entreprise saveEntreprise(Entreprise entreprise) {
        return entrepriseRepository.save(entreprise);
    }

    @Override
    public Entreprise updateEntreprise(Entreprise entreprise) {
        return entrepriseRepository.save(entreprise);
    }

    @Override
    public void deleteEntrepriseById(Long id) {
        entrepriseRepository.deleteById(id);
    }

    @Override
    public String deleteSynchEntrepriseFormation(Long entrepriseId, Long formationId) {
        Entreprise entreprise = entrepriseRepository.findById(entrepriseId).orElse(null);
        Formation formation = formationRepository.findById(formationId).orElse(null);

        if(entreprise != null && formation !=null && formation.getEntreprises().contains(entreprise) ){
            entreprise.removeFormation(formation);
            formationRepository.save(formation);
            return " l'entreprise a été supprimé avec succès";
        }
        return " une erreur s'est produite";
    }


    @Override
    public void addImage(Long id, MultipartFile file) throws IOException {

        Entreprise entreprise = entrepriseRepository.findById(id).orElse(null);

        if(entreprise != null){

            if(file != null && !file.isEmpty()){
                String pathPhoto = path_image + id + ".png" ;
                file.transferTo(Path.of(pathPhoto));
                String urlPhoto = "http://localhost:"+port + "/entreprises/images/" + entreprise.getId() ;
                entreprise.setImage(urlPhoto);
            }

            entrepriseRepository.save(entreprise) ;
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
