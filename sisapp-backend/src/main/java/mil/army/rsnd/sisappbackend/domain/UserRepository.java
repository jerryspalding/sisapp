package mil.army.rsnd.sisappbackend.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<SisAppUser, Long> { 
    SisAppUser findByUsername(String username);
}
