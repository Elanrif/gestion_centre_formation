package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.CategoryFormation;
import com.master.s3.gestion_centre_formation_spring.repositories.CategoryFmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class CategoryFmServiceImpl implements CategoryFmService{
    @Autowired
    private CategoryFmRepository categoryFmRepository ;
    @Override
    public CategoryFormation findCategoryById(Long id) {
        return categoryFmRepository.findById(id).orElse(null);
    }

    @Override
    public List<CategoryFormation> findAllCategories() {
        return categoryFmRepository.findAll();
    }

    @Override
    public CategoryFormation saveCategory(CategoryFormation categoryFormation) {
        return categoryFmRepository.save(categoryFormation);
    }

    @Override
    public CategoryFormation updateCategory(CategoryFormation categoryFormation) {
        return categoryFmRepository.save(categoryFormation);
    }

    @Override
    public void deleteCategoryById(Long id) {
        categoryFmRepository.deleteById(id);
    }
}
