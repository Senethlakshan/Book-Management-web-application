package com.example.Admin.Repository;

import com.example.Admin.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
@Query(value = "SELECT*FROM BOOKS WHERE BOOK_ID=?1 AND BOOK_NAME=?2", nativeQuery = true)
Admin getUserByUserIDAndAddress(String userId, String address);

    @Query(value = "SELECT*FROM BOOKS WHERE BOOK_ID= ?1", nativeQuery = true)
    Admin getBookByBookId(String bookId);


    @Query(value = "SELECT*FROM BOOKS WHERE  book_name= ?1", nativeQuery = true)
    Admin getBookByBookName(String bookName);

}