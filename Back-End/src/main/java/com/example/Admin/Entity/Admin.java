package com.example.Admin.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "books")
public class Admin {

    @Id
    private int book_id;
    private String book_name;
    private  String book_author;
    private  int price;
    private  int quntity;
    private  String description;


}
