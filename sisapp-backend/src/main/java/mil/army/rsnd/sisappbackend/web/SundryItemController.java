package mil.army.rsnd.sisappbackend.web;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import mil.army.rsnd.sisappbackend.domain.SundryItem;
import mil.army.rsnd.sisappbackend.domain.SundryItemRepository;

@RestController
public class SundryItemController {
@Autowired	
private SundryItemRepository repository;
	
@RequestMapping("/SundryItems")
public Iterable<SundryItem> getSundryItems() {
return repository.findAll();
	} 
}



