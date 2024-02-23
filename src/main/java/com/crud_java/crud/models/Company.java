package com.crud_java.crud.models;

import jakarta.persistence.*;

//@Entity
//@Table(name="companies")
public class Company {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String web;
    private String country;

    public String getName(){
        return this.name;
    };

    public String getWeb(){
        return this.web;
    };

    public String getCountry(){
        return this.country;
    };

    public void setName(String name){
        this.name = name;
    };

    public void setWeb(String web){
        this.web = web;
    }
    public void setCountry(String country){
        this.country = country;
    }
}
