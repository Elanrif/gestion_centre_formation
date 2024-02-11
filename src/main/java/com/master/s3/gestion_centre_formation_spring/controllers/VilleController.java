package com.master.s3.gestion_centre_formation_spring.controllers;

import com.master.s3.gestion_centre_formation_spring.entities.Ville;
import com.master.s3.gestion_centre_formation_spring.services.VilleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/villes")
@CrossOrigin
public class VilleController {
    @Autowired
    private VilleService villeService ;

    @GetMapping("/{id}")
    public Ville findCategoryById(@PathVariable Long id) {
        return villeService.findVilleById(id);
    }
    @GetMapping
    public List<Ville> findAllCategories() {
        return villeService.findAllVilles();
    }
    @PostMapping
    public Ville saveCategory(@RequestBody Ville ville) {
        return villeService.saveVille(ville);
    }
    @PutMapping
    public Ville updateCategory(@RequestBody Ville ville) {
        return villeService.updateVille(ville);
    }
    @DeleteMapping("/{id}")
    public void deleteCategoryById(@PathVariable Long id) {
        villeService.deleteVilleById(id);
    }
}
