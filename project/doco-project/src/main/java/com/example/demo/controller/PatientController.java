package com.example.demo.controller;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.*;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.DummyPatients;
import com.example.demo.entity.Dummy_Appointment;
import com.example.demo.entity.Patients;

@RestController
@Transactional
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {

		@Autowired
		PatientService 	pservice;
		
		@RequestMapping("/getPatientCount")
		public Long pCount()
		{
			return pservice.pCount();
		}
		
		@PostMapping("/regPatient")
		public Patients register(@RequestBody DummyPatients p)
		{
			return pservice.register(p);
		}
		
		
		@GetMapping("/getAllPatients")
		public List<Patients> getAllPatients()
		{
			return pservice.getAllPatients();
		}
		@GetMapping("/getPatientByPId")
		public Patients getPatientByPId(@RequestParam("patient_id")int patient_id)
		{
			return pservice.getPatientByPId(patient_id);
		}
		@GetMapping("/getPatientByUId")
		public Patients getPatientByUId(@RequestParam("user_id_")int user_id_)
		{
			return pservice.getPatientbyUId(user_id_);
		}
		
		@PostMapping("/addAppointment")
		public Appointment addAppointment(@RequestBody Dummy_Appointment app )
		{
			return pservice.addAppointment(app);
		}
		
		@GetMapping("/appointmentCancellationRequest")
		public boolean appointmentCancellationRequest(@RequestParam("app_id")int app_id)
		{
			return pservice.appointmentCancellationRequest(app_id);
		}
		
		@GetMapping("/getAppointmentsofPatient")
		public List<Appointment> getAppointmentsofPatient(@RequestParam ("patient_id")int pid)
		{
			return pservice.getAppointmentsofPatient(pid); 
		}
		
	
		
		
		

		
}
