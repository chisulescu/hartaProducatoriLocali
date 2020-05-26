package com.local.producers.producatori.locali.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.nio.charset.StandardCharsets;

@Component
public class Customernterceptor implements HandlerInterceptor {
	
	private static Logger log = LoggerFactory.getLogger(Customernterceptor.class);

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		log.info("CustomerInterceptor - preHandle");
		boolean flag = true;
		String method = request.getMethod();
//		int contentLength =request.getContentLength();
		if(method.equalsIgnoreCase("post") || method.equalsIgnoreCase("put")) {
			String contentType = request.getContentType();

			// here added ;chartset=UFT-8 for matching with JSON files
			if(contentType != null && !contentType.equalsIgnoreCase("application/json;charset=UTF-8")) {
				flag = false;
			} 
//			else if(contentLength <= 2) {
//				flag = false;
//			}
		}
		if(!flag) {
			response.sendRedirect("/customers/invalid");
		}
		return flag;
		//return HandlerInterceptor.super.preHandle(request, response, handler);
	}
	
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {
		log.info("CustomerInterceptor - postHandle");
		HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
	}
	
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		log.info("CustomerInterceptor - afterCompletion");
		HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
	}
}
