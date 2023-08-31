package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Doctors;

import com.example.demo.entity.Schedules;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.DoctorRepo;
import com.example.demo.repository.SchRepository;

@Service
public class ScheduleService {
	@Autowired
	SchRepository r;
	


public List<Schedules> getById(int id) {
		
		return r.getById(id);
	};
	
	public List<Schedules> getall()
	{
		return r.findAll();
	}
	public List<Schedules> getSch()
	{
		return r.findAll();
	}



           
}
