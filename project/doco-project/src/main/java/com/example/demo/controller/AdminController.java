package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AdminService;
import com.example.demo.Service.ScheduleService;
import com.example.demo.Service.UserService;
import com.example.demo.entity.Schedules;
import com.example.demo.entity.Users;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

	@Autowired
	ScheduleService ss;

	@Autowired
	UserService us;
	
	@Autowired
	AdminService as;
	
	@GetMapping("/getSchedules")
	public List<Schedules> getSch()
	{
		return ss.getSch();
	}

	@GetMapping("/getApprove")
	public List<Users> getApprove()
	{
		return us.getApprove();
	}

	@PutMapping("/approve/{status}/{id}")
	public int apporveRequest(@PathVariable int status, @PathVariable int id) {
	    return us.apporveRequest(status, id);
	}
	
	
	@DeleteMapping("/deleteByUId")
	public boolean deleteByUId(@RequestParam("user_id")int user_id)
	{
		as.deleteByUId(user_id);
		return true;
	}
}
