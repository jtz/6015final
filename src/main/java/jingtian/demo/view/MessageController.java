package jingtian.demo.view;

import jingtian.demo.dao.MessageRepository;
import jingtian.demo.model.Message;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/message")
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public boolean createMessage(@RequestBody Message message) {
        return messageRepository.save(message) != null? true: false;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/get")
    public List<Message> getMessage() {
        Iterator<Message> iterator = messageRepository.findAll().iterator();
        List<Message> messageList = new ArrayList<>();
        while (iterator.hasNext()) {
            Message message = iterator.next();
            if ("yes".equalsIgnoreCase(message.getShowmsg())) {
                // allow show in page
                messageList.add(message);
            }
        }
        return messageList;
    }
}
