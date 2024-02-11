package com.master.s3.gestion_centre_formation_spring.controllers;

import com.master.s3.gestion_centre_formation_spring.entities.Person;
import com.master.s3.gestion_centre_formation_spring.entities.Role;
import com.master.s3.gestion_centre_formation_spring.services.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/persons")
@CrossOrigin
public class PersonController {
    @Autowired
    private PersonServiceImpl personService;

    @GetMapping("/{id}")
    public Person findPersonById(@PathVariable Long id) {
        return personService.findPersonById(id);
    }
    @GetMapping
    public List<Person> findAllPersons() {
        return personService.findAllPersons();
    }
    @PostMapping("/loginUser")
    public Person login(@RequestBody Person person) {
        return personService.loginPerson(person);
    }

    @PostMapping
    public Person savePerson(@RequestBody Person person) {
        return personService.savePerson(person);
    }
    @PutMapping
    public Person updatePerson(@RequestBody Person person) {
        return personService.updatePerson(person);
    }
    @DeleteMapping("/{id}")
    public void deletePersonById(@PathVariable Long id) {

        personService.deletePersonById(id);
    }

    @PostMapping("/image")
    public void addImage(
            @RequestParam("id") Long id,
            @RequestParam(required = false,value="image") MultipartFile file /* = false , pour ne pas avoir d'erreur si on envoie pas de photo*/
    ) throws IOException {

        personService.addImage(id,file);
    }

    @GetMapping("/images/{id}")
    public ResponseEntity<Resource> getImage(@PathVariable Long id){
        return personService.getImage(id);
    }

    @GetMapping("/role")
    public List<Person> findByRole(@RequestParam Role role){

        return personService.findByRole(role);
    }

}
