package com.local.producers.producatori.locali.exception;

public class CustomerNotFoundException extends RuntimeException {

	private static final long serialVersionUID = -2533194229906054487L;
	
	public CustomerNotFoundException(String message) {
		super(message);
	}

}
