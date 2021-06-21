package jingtian.demo.dao;

import jingtian.demo.model.Message;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface MessageRepository extends CrudRepository<Message, Long> {
    List<Message> findByShowmsg(String showmsg);
}
