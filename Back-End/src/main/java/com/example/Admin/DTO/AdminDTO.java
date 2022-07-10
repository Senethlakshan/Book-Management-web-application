package com.example.Admin.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AdminDTO {

    private int book_id;
    private String book_name;
    private  String book_author;
    private  int price;
    private  int quntity;
    private  String description;
}
