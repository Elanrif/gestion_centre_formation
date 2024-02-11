package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Formation;
import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface UtilisateurService {

    public Utilisateur findUtilisateurById(Long id);
    public Utilisateur findOneByUsername(String username);
    public List<Utilisateur> findAllUtilisateurs();

    public Utilisateur saveUtilisateur(Utilisateur utilisateur) ;
    public Utilisateur saveIndividuForm(Utilisateur utilisateur,Long formationId) ;
    public Utilisateur userFollowFormation(Long utilisateurId,Long formationId) ;
    public Utilisateur userunFollowFormation(Long utilisateurId,Long formationId) ;
    public Utilisateur saveUtilisateurAdmin(Utilisateur utilisateur) ;
    public Utilisateur updateUtilisateur(Utilisateur utilisateur) ;
    public void deleteUtilisateurById(Long id) ;
    public Utilisateur login(Utilisateur utilisateur);
    public void addImage(Long id, MultipartFile file) throws IOException;
    public ResponseEntity<Resource> getImage(Long id);
}
