package com.local.producers.producatori.locali.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Customer {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String tara;

    @NotNull
    private String producator;

    @NotNull
    private String nume_firma;

    @NotNull
    private String judet;

    @NotNull
    private String categorie;

    @NotNull
    private String sub_categorie;

    @NotNull
    private String descriere_producator;

    @NotNull
    private String email;

    @NotNull
    private Long telefon;

    @NotNull
    private String website;

    @NotNull
    private String facebook;

    @NotNull
    private String longitude;

    @NotNull
    private String latitude;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTara() {
        return tara;
    }

    public void setTara(String tara) {
        this.tara = tara;
    }

    public String getProducator() {
        return producator;
    }

    public void setProducator(String producator) {
        this.producator = producator;
    }

    public String getNume_firma() {
        return nume_firma;
    }

    public void setNume_firma(String nume_firma) {
        this.nume_firma = nume_firma;
    }

    public String getJudet() {
        return judet;
    }

    public void setJudet(String judet) {
        this.judet = judet;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public String getSub_categorie() {
        return sub_categorie;
    }

    public void setSub_categorie(String sub_categorie) {
        this.sub_categorie = sub_categorie;
    }

    public String getDescriere_producator() {
        return descriere_producator;
    }

    public void setDescriere_producator(String descriere_producator) {
        this.descriere_producator = descriere_producator;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getTelefon() {
        return telefon;
    }

    public void setTelefon(Long telefon) {
        this.telefon = telefon;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }
}
