package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.UserService;
import com.example.demo.entity.Users;
@CrossOrigin(origins="http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	UserService us;
	
	@RequestMapping("/getUsers")
	public List<Users> getUsers()
	{
		return us.getUsers();
				}
<<<<<<< HEAD
	@PostMapping("/login")
	public Users loginCheck(@RequestBody Users l)
	{
		return us.getLogin(l.getEmail_(), l.getPassword_());
	}
	
	@RequestMapping("/getAdminInfo")
	public Users getAdmin(@RequestParam int id)
	{
		return us.getAdmin(id);
	}
	
=======

//@GetMapping("/getAppointmentsofDoctor")
//public List<Appointment> getAppointmentsofDoctor(@RequestParam ("users_")int did)
//{
//	return docser.getAppointmentsofDoctor(did); 
//}
@RequestMapping("/getAdminInfo")
public Users getAdmin(@RequestParam int id)
{
	return us.getAdmin(id);
}

>>>>>>> 84f2cae4e1be608cb18fc9c78623be59b4c98e05
}
