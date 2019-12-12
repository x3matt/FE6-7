package de.telran.form.dto;

import de.telran.form.entity.PostEntity;
import lombok.*;

import java.util.Date;

@Data
public class PostDto {
    private Long id;
    private String title;
    private String body;
    private Date date;
    private Long authorId;

    public PostDto(PostEntity entity) {
        this.id = entity.getId();
        this.title = entity.getTitle();
        this.body = entity.getBody();
        this.date = entity.getDate();
        this.authorId = entity.getAuthorEntity().getId();
    }

    public PostDto() {
    }
}
