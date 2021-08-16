package com.example.post.post;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/post")
@AllArgsConstructor

@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    private final PostService postService;

    @PostMapping
    public ResponseEntity<Post> post(@RequestBody Post post) {
        postService.savePost(post);
        return ResponseEntity.ok(post);

    }

    @GetMapping
    public ResponseEntity<List<Post>> getAll() {
        List<Post> allPosts = postService.getAllPosts();
        return ResponseEntity.ok(allPosts);
    }

}
