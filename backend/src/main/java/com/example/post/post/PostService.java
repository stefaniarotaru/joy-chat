package com.example.post.post;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@AllArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Transactional
    public Integer upvotePost(Long postId) {
        Post post = postRepository.getById(postId);
        post.setUpvotes(post.getUpvotes() + 1);
        return post.getUpvotes();
    }

}
