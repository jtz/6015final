package jingtian.demo.view;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/")
public class JsonController {

    @CrossOrigin(origins = "*")
    @GetMapping("/getjson")
    public String getCollegeDegrees() throws IOException {
        InputStream is = JsonController.class.getResourceAsStream("/static/my_college_degrees.json");
        return IOUtils.toString( is, "UTF-8" );
    }
}