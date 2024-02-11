package com.master.s3.gestion_centre_formation_spring.services;


import com.master.s3.gestion_centre_formation_spring.entities.Ville;

import java.util.List;

public interface VilleService {

    public Ville findVilleById(Long id);
    public List<Ville> findAllVilles();
    public Ville saveVille(Ville ville) ;
    public Ville updateVille(Ville ville) ;
    public void deleteVilleById(Long id) ;
}
