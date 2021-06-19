package jingtian.demo.dao;

import jingtian.demo.model.Uiuser;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Uiuser, String> {
    Uiuser findByUsernameAndPassword(String username, String password);
}
