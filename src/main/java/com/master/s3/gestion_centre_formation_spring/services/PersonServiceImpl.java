package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.Person;
import com.master.s3.gestion_centre_formation_spring.entities.Role;
import com.master.s3.gestion_centre_formation_spring.entities.Utilisateur;
import com.master.s3.gestion_centre_formation_spring.entities.Ville;
import com.master.s3.gestion_centre_formation_spring.repositories.PersonRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.UtilisateurRepository;
import com.master.s3.gestion_centre_formation_spring.repositories.VilleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
@Service
public class PersonServiceImpl  implements UserDetailsService {
    @Autowired
    private PersonRepository personRepository ;

    @Autowired
    private VilleRepository villeRepository ;

    //changement de port dynamic voir dossier .properties
    @Value("${server.port}")
    private int port ;
    @Value("${pathImageP}")
    private String path_image ;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return personRepository.findByUsername(username);
    }

    public Person findPersonById(Long id) {
        return personRepository.findById(id).orElse(null);
    }

    public List<Person> findAllPersons() {
        return personRepository.findAll();
    }


    public Person savePerson(Person person) {

        /* l'utilisateur on lui donne la possibilité d'entrer n'importe quel ville, sans selection des villes existantes*/
        if(person.getVille() != null){
            Ville existingVille =  villeRepository.findByNomContaining(person.getVille().getNom());
            Ville ville = new Ville();
            /* si la ville qu'il envoie existe déja, on synchronise les relations entre ville et user.
             * Sinon on ajoute la ville a la Base de Donnée
             * */
            if(existingVille != null){
                existingVille.addPerson(person);
            }else{
                ville.setNom(person.getVille().getNom());
                ville.addPerson(person);
            }

        }

        if (personRepository.findByUsername(person.getUsername()) != null) {

            throw new IllegalArgumentException("L'email existe déjà !");
        }
        person.setPassword(new BCryptPasswordEncoder().encode(person.getPassword()));
        return personRepository.save(person);
    }

    public Person updatePerson(Person person) {

        Person existingPerson = personRepository.findById(person.getId()).orElse(null) ;
        Ville existingVille  = existingPerson.getVille() ;
        Ville ville = villeRepository.findById(person.getVille().getId()).orElse(null);

        if(existingPerson != null){

            if(ville != null){
                if(existingVille != null){
                    ville.removePerson(existingPerson);
                }

                ville.addPerson(existingPerson);
            }

            if(existingPerson.getRole() ==  Role.ROLE_FORMATEUR){
                existingPerson.setCompetence(person.getCompetence());
            }
            existingPerson.setPassword(new BCryptPasswordEncoder().encode(person.getPassword()));
            existingPerson.setNom(person.getNom());
            existingPerson.setPrenom(person.getPrenom());
            existingPerson.setUsername(person.getUsername());
            existingPerson.setTel(person.getTel());
            existingPerson.setDescription(person.getDescription());

            return personRepository.save(existingPerson);
        }

        return null ;
    }

    public Person loginPerson(Person person) {

        Person existingPerson = personRepository.findByUsername(person.getUsername());

        // Vérification si l'utilisateur existe et vérification du mot de passe
        if (existingPerson == null || !new BCryptPasswordEncoder().matches(person.getPassword(), existingPerson.getPassword())) {
            throw new IllegalArgumentException("Oups, vérifiez vos informations !");
        } else {
            return existingPerson;
        }

    }


    public void deletePersonById(Long id) {
        personRepository.deleteById(id);
    }


    public void addImage(Long id, MultipartFile file) throws IOException {

        Person utilisateur = personRepository.findById(id).orElse(null);

        if(utilisateur != null){

            if(file != null && !file.isEmpty()){
                String pathPhoto = path_image + id + ".png" ;
                file.transferTo(Path.of(pathPhoto));
                String urlPhoto = "http://localhost:"+port + "/persons/images/" + utilisateur.getId() ;
                utilisateur.setImage(urlPhoto);
            }

            personRepository.save(utilisateur) ;
        }
    }


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

    public List<Person> findByRole(Role role){

        return personRepository.findByRole(role);
    }



}
