package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AppointmentService;
import com.example.demo.Service.ScheduleService;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.Dummy_Appointment;
import com.example.demo.entity.Schedules;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ScheduController {
	@Autowired
	ScheduleService s;
	@Autowired
	AppointmentService as;
	
	@GetMapping("/getId")
	@CrossOrigin(origins = "http://localhost:3000")
	public List<Schedules>  getById(@RequestParam("id") int id)
	{
		return s.getById(id);
	};
	@GetMapping("/getall")
	public List<Schedules> geta()
	{
		return s.getall();
	}
	@GetMapping("/getAllAppointments")
	 public List<Appointment> getAllAppointment()
	 {
		 return as.getAllAppointments();
	 }
	
}
