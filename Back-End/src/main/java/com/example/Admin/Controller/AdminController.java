package com.example.Admin.Controller;


import com.example.Admin.DTO.AdminDTO;
import com.example.Admin.Entity.Admin;
import com.example.Admin.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(value = "/api/book")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;


    @GetMapping("/getBook")
    public List<Admin> list() {
        return adminService.listAllUser();
    }

    @GetMapping("/getBookById/{id}")
    public ResponseEntity<Admin> get(@PathVariable Integer id) {
        try {
            Admin user = adminService.getUser(id);
            return new ResponseEntity<Admin>(user, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public void add(@RequestBody Admin user) {
        adminService.saveUser(user);
    }
    @PutMapping("{id}")
    public ResponseEntity<?> update(@RequestBody Admin user, @PathVariable Integer id) {
        try {
            Admin existUser = adminService.getUser(id);
            user.setBook_id(id);
            adminService.saveUser(user);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("{id}")
    public ResponseEntity<Object> delete(@PathVariable Integer id) {
        try{
            adminService.deleteUser(id);

         } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
        return null;
    }

    //extra query get by book id and name
    @GetMapping("/getUserByUserIDAndAddress/{userID}/{address}")
    public AdminDTO getUserByUserIDAndAddress(@PathVariable String userID , @PathVariable String address){
        System.out.println("User ID :"+ userID +"User address :" +address);
        return adminService.getUserByUserIDAndAddress(userID,address);
    }

    @GetMapping("{bookId}")
    public AdminDTO getBookByBookId(@PathVariable String bookId){
        return adminService.getBookByBookId(bookId);
    }


    @GetMapping("/getbookbyId/{bookName}")
    public AdminDTO getBookByBookName(@PathVariable String bookName){
        return adminService.getBookByBookName(bookName);
    }



   /* @GetMapping("/getBook")
    public List<AdminDTO> getUser() {
        return adminService.getAllUsers();
    }

    @PostMapping("/saveBook")
    public AdminDTO saveUser(@RequestBody AdminDTO adminDTO) {
        return adminService.saveUser(adminDTO);
    }

    @PutMapping("/updateBook")
    public AdminDTO updateUser(@RequestBody AdminDTO userDTO) {
        return adminService.updateUser(userDTO);
    }

    @DeleteMapping("/deleteBook")
    public boolean deleteUser(@RequestBody AdminDTO adminDTO) {
        return adminService.deleteUser(adminDTO);

        @PostMapping("/saveBook")
    public AdminDTO saveUser(@RequestBody AdminDTO adminDTO) {
        return adminService.saveUser(adminDTO);
    }

    @GetMapping("/getBookByBookId/{bookId}")
    public AdminDTO getBookByBookId(@PathVariable String bookId){
        return adminService.getBookByBookId(bookId);
    }

    @GetMapping("/getUserByUserIDAndAddress/{userID}/{address}")
    public AdminDTO getUserByUserIDAndAddress(@PathVariable String userID ,@PathVariable String address){
        System.out.println("User ID :"+ userID +"User address :" +address);
        return adminService.getUserByUserIDAndAddress(userID,address);
    }
    }*/

}
