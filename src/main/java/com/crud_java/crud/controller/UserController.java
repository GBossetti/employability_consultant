package com.crud_java.crud.controller;

import com.crud_java.crud.dao.UserDao;
import com.crud_java.crud.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;
    @RequestMapping (value= "test")
    public List<String> test01() {
        return List.of("manzana", "kiwi", "naranja");
    }

    @RequestMapping (value="user/{id}")
    public User getUser(@PathVariable Long id){
        User user = new User();
        user.setId(id);
        user.setSurname("Example 1");
        user.setName("Name 1");
        user.setPhone("+123456");
        user.setEmail("mailFalso");
        user.setPassword("admin123");

        return user;
    }

    @RequestMapping(value="users")
    public List<User> getUsers(){
        return userDao.getUsers();
    }
}
