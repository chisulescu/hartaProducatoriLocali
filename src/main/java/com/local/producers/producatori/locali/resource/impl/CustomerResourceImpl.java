package com.local.producers.producatori.locali.resource.impl;


import java.util.Collection;
import java.util.Optional;

import com.local.producers.producatori.locali.exception.ApplicationException;
import com.local.producers.producatori.locali.exception.CustomerNotFoundException;
import com.local.producers.producatori.locali.model.Customer;
import com.local.producers.producatori.locali.resource.Resource;
import com.local.producers.producatori.locali.service.IService;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerResourceImpl implements Resource<Customer> {

    private static Logger log = LoggerFactory.getLogger(CustomerResourceImpl.class);

    @Autowired
    private IService<Customer> customerService;

    @Override
    public ResponseEntity<Collection<Customer>> findAll() {
        log.info("CustomerResourceImpl - findAll");
        return new ResponseEntity<>(customerService.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Customer> findById(Long id) {
        log.info("CustomerResourceImpl - findById");
        Optional<Customer> customer = customerService.findById(id);
        if(!customer.isPresent()) {
            throw new CustomerNotFoundException("Customer not found");
        }
        return new ResponseEntity<>(customer.get(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<Customer> save(Customer customer) {
        log.info("CustomerResourceImpl - save");
        if(customer.getId() != null) {
            throw new ApplicationException("Customer ID found, ID is not required for save the data");
        }
        return new ResponseEntity<>(customerService.saveOrUpdate(customer), HttpStatus.CREATED);
    }

    @Override
    public ResponseEntity<Customer> update(Customer customer) {
        log.info("CustomerResourceImpl - update");
        if(customer.getId() == null) {
            throw new ApplicationException("Customer ID not found, ID is required for update the data");
        }
        return new ResponseEntity<>(customerService.saveOrUpdate(customer), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> deleteById(Long id) {
        log.info("CustomerResourceImpl - deleteById");
        Optional<Customer> customer = customerService.findById(id);
        if(!customer.isPresent()) {
            throw new CustomerNotFoundException("Customer not found");
        }
        return new ResponseEntity<>(customerService.deleteById(id), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<String> invalid() {
        log.info("CustomerResourceImpl - invalid");
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("message", "something is missing, please check everything before sending the request!!!");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(jsonObject.toString(), HttpStatus.OK);
    }

}
