package com.master.s3.gestion_centre_formation_spring.services;

import com.master.s3.gestion_centre_formation_spring.entities.CategoryFormation;

import java.util.List;

public interface CategoryFmService {
    public CategoryFormation findCategoryById(Long id);
    public List<CategoryFormation> findAllCategories();
    public CategoryFormation saveCategory(CategoryFormation categoryFormation) ;
    public CategoryFormation updateCategory(CategoryFormation categoryFormation) ;
    public void deleteCategoryById(Long id) ;
}
