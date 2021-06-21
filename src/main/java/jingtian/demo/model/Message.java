package jingtian.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Message {
    @Id
    private Long id;
    private String name;
    private String gender;
    private String email;
    private String phone;
    private String contact;
    private String showmsg;
    private String msg;
}