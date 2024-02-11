package com.master.s3.gestion_centre_formation_spring.controllers;

import com.master.s3.gestion_centre_formation_spring.entities.CategoryFormation;
import com.master.s3.gestion_centre_formation_spring.services.CategoryFmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin
public class CategoryFmController{

    @Autowired
    private CategoryFmService categoryFmService ;

    @GetMapping("/{id}")
    public CategoryFormation findCategoryById(@PathVariable Long id) {
        return categoryFmService.findCategoryById(id);
    }
    @GetMapping
    public List<CategoryFormation> findAllCategories() {
        return categoryFmService.findAllCategories();
    }
    @PostMapping
    public CategoryFormation saveCategory(@RequestBody CategoryFormation categoryFormation) {
        return categoryFmService.saveCategory(categoryFormation);
    }
    @PutMapping
    public CategoryFormation updateCategory(@RequestBody CategoryFormation categoryFormation) {
        return categoryFmService.updateCategory(categoryFormation);
    }
    @DeleteMapping("/{id}")
    public void deleteCategoryById(@PathVariable Long id) {
            categoryFmService.deleteCategoryById(id);
    }
}
