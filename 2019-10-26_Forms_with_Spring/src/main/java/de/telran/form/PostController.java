package de.telran.form;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/post")
@Slf4j
public class PostController {
    @GetMapping
    public String createNewPost(@RequestParam("title") String title,
                              @RequestParam("postBody") String body,
                                @RequestParam("date") String date) {
        log.info("Request received. Title={}, body={}, date={}", title, body, date);
        return "index.html";
    }
}
