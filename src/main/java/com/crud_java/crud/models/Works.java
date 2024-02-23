package com.crud_java.crud.models;

import jakarta.persistence.*;

import java.util.Date;

//@Entity
//@Table(name="works")
public class Works {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String position;
    private Date startPosition;
    private Date endPosition;
    private Company company;

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Date getEndPosition() {
        return endPosition;
    }

    public void setEndPosition(Date endPosition) {
        this.endPosition = endPosition;
    }

    public Date getStartPosition() {
        return startPosition;
    }

    public void setStartPosition(Date startPosition) {
        this.startPosition = startPosition;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
