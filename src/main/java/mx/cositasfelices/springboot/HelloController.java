package mx.cositasfelices.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping ( "/" )
    public String index ( ) {
        return "Bienvenido a Pig Consulting Services!";
    }

}
