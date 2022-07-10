package com.example.Admin.Service;

import com.example.Admin.DTO.AdminDTO;
import com.example.Admin.Entity.Admin;
import com.example.Admin.Repository.AdminRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private  ModelMapper modelMapper;


    public List<Admin> listAllUser() {
        return adminRepository.findAll();
    }

    public Admin getUser(Integer id) {
        return adminRepository.findById(id).get();
    }

    public void saveUser(Admin user) {
        adminRepository.save(user);
    }

    public void deleteUser(Integer id) {
        adminRepository.deleteById(id);
    }

    public AdminDTO getUserByUserIDAndAddress(String userId,String address){
        Admin user =adminRepository.getUserByUserIDAndAddress(userId,address);
        return modelMapper.map(user,AdminDTO.class);
    }

    public AdminDTO getBookByBookId(String bookId){
        Admin user=adminRepository.getBookByBookId(bookId);
        return modelMapper.map(user,AdminDTO.class);
    }

    public AdminDTO getBookByBookName(String bookName){
        Admin user=adminRepository.getBookByBookName(bookName);
        return modelMapper.map(user,AdminDTO.class);
    }


    /*public List<AdminDTO> getAllUsers(){
        List<Admin>userList=adminRepository.findAll();
        return modelMapper.map(userList,new TypeToken<List<AdminDTO>>(){}.getType());
    }
    public AdminDTO updateUser(AdminDTO adminDTO){
        adminRepository.save(modelMapper.map(adminDTO,Admin.class));
        return adminDTO;

    }

    public boolean deleteUser(AdminDTO adminDTO){
        adminRepository.delete(modelMapper.map(adminDTO,Admin.class));
        return true;
    }
    public AdminDTO saveUser(AdminDTO userDTO){
        adminRepository.save(modelMapper.map(userDTO, Admin.class));
        return userDTO;
    }


    public AdminDTO getBookByBookId(String bookId){
        Admin user=adminRepository.getBookByBookId(bookId);
        return modelMapper.map(user,AdminDTO.class);
    }

    public AdminDTO getUserByUserIDAndAddress(String userId,String address){
        Admin user =adminRepository.getUserByUserIDAndAddress(userId,address);
        return modelMapper.map(user,AdminDTO.class);
    }


    */

}
