package com.local.producers.producatori.locali.service.impl;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import com.local.producers.producatori.locali.model.Customer;
import com.local.producers.producatori.locali.repository.CustomerRepository;
import com.local.producers.producatori.locali.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements IService<Customer> {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public Collection<Customer> findAll() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    @Override
    public Customer saveOrUpdate(Customer customer) {
        return customerRepository.saveAndFlush(customer);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            customerRepository.deleteById(id);
            jsonObject.put("message", "Customer deleted successfully");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jsonObject.toString();
    }
}
