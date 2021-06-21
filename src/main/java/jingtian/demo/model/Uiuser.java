package jingtian.demo.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Uiuser {
    @Id
    private String username;
    private String password;
}
