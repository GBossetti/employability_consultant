package com.crud_java.crud.dao;

import com.crud_java.crud.models.User;

import java.util.List;

public interface UserDao {
    List<User> getUsers();

    void deteleUser(Long id);

    void registerUser(User user);

    boolean verifyCredentials(User user);
}
