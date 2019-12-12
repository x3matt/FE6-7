package de.telran.form.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class PostEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @Column(length = 10000)
    private String body;
    private Date date;
    @ManyToOne(targetEntity = AuthorEntity.class)
    private AuthorEntity authorEntity;
}
