package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.UserRepo;

@Service
public class AdminService {

	@Autowired
	UserRepo ur;
	
	public void deleteByUId(int uid)
	{
		ur.deleteById(uid);
	}
	
	
}
