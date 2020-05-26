package com.local.producers.producatori.locali.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

@Component
public class CustomernterceptorConfig extends WebMvcConfigurationSupport {
	
	@Autowired
	private Customernterceptor customernterceptor;
	
	@Override
	protected void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(customernterceptor);
	}
}
