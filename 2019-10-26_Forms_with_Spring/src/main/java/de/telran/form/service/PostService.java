package de.telran.form.service;

import de.telran.form.dto.PostDto;
import de.telran.form.entity.PostEntity;
import de.telran.form.repository.AuthorRepository;
import de.telran.form.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {

    private final PostRepository postRepository;
    private final AuthorRepository authorRepository;

    public PostService(PostRepository postRepository, AuthorRepository authorRepository) {
        this.postRepository = postRepository;
        this.authorRepository = authorRepository;
    }

    public Long createPost(PostDto postDto) {
        PostEntity postEntity =new PostEntity(
                postDto.getTitle(),
                postDto.getBody(),
                postDto.getDate(),
                authorRepository.getOne(postDto.getAuthorId()));

        return postRepository.save(postEntity).getId();
    }

    public List<PostDto> getAllPosts() {
        return postRepository.findAll().stream()
                .map(a -> new PostDto(a.getTitle(),a.getBody(),a.getDate(),a.getAuthorEntity().getId()))
                .collect(Collectors.toList());
    }
}
