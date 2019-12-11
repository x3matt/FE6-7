package de.telran.form.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class PostEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String body;
    private Date date;
    @ManyToOne(targetEntity = AuthorEntity.class)
    private AuthorEntity authorEntity;
    public PostEntity(){}

    public PostEntity(String title, String body, Date date, AuthorEntity one) {
    }
}
