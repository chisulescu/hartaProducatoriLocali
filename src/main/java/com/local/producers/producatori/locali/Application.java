package com.local.producers.producatori.locali;

import com.local.producers.producatori.locali.model.Customer;
import com.local.producers.producatori.locali.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class Application implements CommandLineRunner{

	@Autowired
	private IService<Customer> service;

	public static void main(String[] args) {

		SpringApplication.run(Application.class, args);

	}

	@Override
	public void run(String... args) throws Exception {
		Customer customer = new Customer();
		customer.setTara("Rep.Moldova");
		customer.setCategorie("Producator");
		Customer customer2 = new Customer();
		customer2.setTara("Rep.Moldova");
		customer2.setCategorie("Producator");
		System.out.println("Am fost pe aici   " + customer.getTara());
		System.out.println("Am fost pe aici   " + customer2.getTara());

		System.out.println("File encouding"+ System.getProperty("file.encoding"));


//		Customer customer2 = new Customer();
//		customer2.setTara("Rep Moldova");
//		customer2.setCategorie("Producator");
//		customer2.setNumeFirma("Vitalie SRL");
//		customer2.setJudet("Calarasi");
		service.saveOrUpdate(customer);
		service.saveOrUpdate(customer2);
//		service.saveOrUpdate(customer2);
	}


}
