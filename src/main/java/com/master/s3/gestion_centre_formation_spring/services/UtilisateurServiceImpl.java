package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Formation;
import com.master.s3.gestion_centre_formation_spring.entities.Role;
import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;
import com.master.s3.gestion_centre_formation_spring.entities.Ville;
import com.master.s3.gestion_centre_formation_spring.repositories.FormationRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.UtilisateurRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

@Service
public class UtilisateurServiceImpl implements UtilisateurService{

    @Autowired
    private UtilisateurRepository utilisateurRepository ;
    @Autowired
    private VilleRepository villeRepository ;
    @Autowired
    private FormationRepository formationRepository ;
    //changement de port dynamic voir dossier .properties
    @Value("${server.port}")
    private int port ;
    @Value("${pathImageU}")
    private String path_image ;

    @Override
    public Utilisateur findUtilisateurById(Long id) {
        return utilisateurRepository.findById(id).get();
    }

    @Override
    public Utilisateur findOneByUsername(String username) {

        return utilisateurRepository.findOneByUsername(username);
    }
    @Override
    public List<Utilisateur> findAllUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Utilisateur saveUtilisateur(Utilisateur utilisateur) {


        /* l'utilisateur on lui donne la possibilité d'entrer n'importe quel ville, sans selection des villes existantes*/
        if(utilisateur.getVille() != null){
            Ville existingVille =  villeRepository.findByNomContaining(utilisateur.getVille().getNom());
            Ville ville = new Ville();
        /* si la ville qu'il envoie existe déja, on synchronise les relations entre ville et user.
        * Sinon on ajoute la ville a la Base de Donnée
        * */
            if(existingVille != null){
                existingVille.addUtilisateur(utilisateur);
            }else{
                ville.setNom(utilisateur.getVille().getNom());
                ville.addUtilisateur(utilisateur);
            }

        }


        utilisateur.setPassword(new BCryptPasswordEncoder().encode(utilisateur.getPassword()));

        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur saveIndividuForm(Utilisateur utilisateur,Long formationId) {

        Formation formation = formationRepository.findById(formationId).orElse(null);

        /* helpers methodes , va synchronisé les 2 entités*/
        if(utilisateur.getFormations() != null){
            utilisateur.addFormation(formation);
        }

        /* l'utilisateur on lui donne la possibilité d'entrer n'importe quel ville, sans selection des villes existantes*/
        if(utilisateur.getVille() != null){
            Ville existingVille =  villeRepository.findByNomContaining(utilisateur.getVille().getNom());
            Ville ville = new Ville();
            /* si la ville qu'il envoie existe déja, on synchronise les relations entre ville et user.
             * Sinon on ajoute la ville a la Base de Donnée
             * */
            if(existingVille != null){
                existingVille.addUtilisateur(utilisateur);
            }else{
                ville.setNom(utilisateur.getVille().getNom());
                ville.addUtilisateur(utilisateur);
                /* pas besoin de faire villeRepository.save(ville) , utilisateurRepository.save(utilisateur)
                 * enregistrera directement la ville puisque nous avons fais les relations en CASCADES*/
            }

        }

        utilisateur.setPassword(new BCryptPasswordEncoder().encode(utilisateur.getPassword()));

        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur userFollowFormation(Long utilisateurId, Long formationId) {
        Formation formation = formationRepository.findById(formationId).orElse(null);
        Utilisateur utilisateur = utilisateurRepository.findById(utilisateurId).orElse(null);
        if(formation != null && utilisateur != null){
            formation.addUtilisateur(utilisateur);
            return utilisateurRepository.save(utilisateur);
        }
        return null;
    }

    @Override
    public Utilisateur userunFollowFormation(Long utilisateurId, Long formationId) {
        Formation formation = formationRepository.findById(formationId).orElse(null);
        Utilisateur utilisateur = utilisateurRepository.findById(utilisateurId).orElse(null);
        if(formation != null && utilisateur != null){
                formation.removeUtilisateur(utilisateur);
                return utilisateurRepository.save(utilisateur);
        }
        return null;
    }

    @Override
    public Utilisateur saveUtilisateurAdmin(Utilisateur utilisateur) {
        Ville ville = null;
        /* ici c'est l'admin qui ajoute , donc ce dernier va entrer une ville en choisissant l'option d'une selection */
        if(utilisateur.getVille().getId() !=null){
            ville = villeRepository.findById(utilisateur.getVille().getId()).orElse(null);
            ville.addUtilisateur(utilisateur);
        }
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur updateUtilisateur(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public void deleteUtilisateurById(Long id) {
        utilisateurRepository.deleteById(id);
    }

    @Override
    public Utilisateur login(Utilisateur utilisateur) {

        Utilisateur existingUser = utilisateurRepository.findOneByUsername(utilisateur.getUsername());

        if(existingUser !=null && !new BCryptPasswordEncoder().matches(utilisateur.getPassword(), existingUser.getPassword()))
        {
            return existingUser ;
        }
        return null;
    }

    @Override
    public void addImage(Long id, MultipartFile file) throws IOException {

        Utilisateur utilisateur = utilisateurRepository.findById(id).orElse(null);

        if(utilisateur != null){

            if(file != null && !file.isEmpty()){
                String pathPhoto = path_image + id + ".png" ;
                file.transferTo(Path.of(pathPhoto));
                String urlPhoto = "http://localhost:"+port + "/utilisateurs/images/" + utilisateur.getId() ;
                utilisateur.setImage(urlPhoto);
            }

            utilisateurRepository.save(utilisateur) ;
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
