package mil.army.rsnd.sisappbackend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.FetchType;


@Entity
public class SundryItem {
	
	public SundryItem() {}
    @Id
    //@GeneratedValue(strategy=GenerationType.AUTO)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id; 
    private String category, description, details;
    
    
	public SundryItem(String category, String description, String details) {
		super();
		this.category = category;
		this.description = description;
		this.details = details;
	}
	
	@OneToOne(fetch = FetchType.LAZY)

	public String getCategory() {
		return category;
	}


	public void setCategory(String category) {
		this.category = category;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getDetails() {
		return details;
	}


	public void setDetails(String details) {
		this.details = details;
	}

}
