package com.crud_java.crud.controller;

import com.crud_java.crud.dao.UserDao;
import com.crud_java.crud.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;
    @RequestMapping (value= "test", method = RequestMethod.GET)
    public List<String> test01() {
        return List.of("manzana", "kiwi", "naranja");
    }
    @RequestMapping (value="api/user/{id}", method = RequestMethod.GET)
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

    @RequestMapping(value="api/users", method = RequestMethod.GET)
    public List<User> getUsers(){
        return userDao.getUsers();
    }

    @RequestMapping(value = "api/users/{id}", method = RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id){
        userDao.deleteUser(id);
    }

    @RequestMapping(value = "api/users", method = RequestMethod.POST)
    public void registerUser(@RequestBody User user){
        System.out.println(user);
        userDao.registerUser(user);
    }
}
