package de.telran.form.dto;

import lombok.Data;

import java.util.Date;

@Data
public class PostDto {
    private String title;
    private String body;
    private Date date;
    private Long authorId;

    public PostDto(String title, String body, Date date, Long authorId) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.authorId = authorId;
    }

}
