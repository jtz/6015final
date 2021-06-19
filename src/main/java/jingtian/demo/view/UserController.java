package jingtian.demo.view;

import jingtian.demo.dao.UserRepository;
import jingtian.demo.model.Uiuser;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/check")
    @ResponseStatus(HttpStatus.CREATED)
    public String createTodo(@RequestParam String username, @RequestParam String password) {
        Uiuser user = userRepository.findByUsernameAndPassword(username.toUpperCase(),password);
        if (user != null) {
            // find the user, relink to home.html
            return "home.html";
        } else {
            // not find the user, relink back to index.html
            return "index.html";
        }
    }
}
