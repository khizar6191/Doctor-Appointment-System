package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Dummy_Appointment;
import com.example.demo.repository.AppointmentRepository;

@Service
public class AppointmentService {
		@Autowired
	AppointmentRepository a;
	
		public List<Appointment> getAllAppointments()
		{
			return a.findAll();
		}
}
