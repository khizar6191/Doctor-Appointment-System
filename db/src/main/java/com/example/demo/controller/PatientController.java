package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.PatientService;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.DummyPatients;
import com.example.demo.entity.Dummy_Appointment;
import com.example.demo.entity.Patients;
@CrossOrigin(origins ="http://localhost:3000" )
@RestController
public class PatientController {

	@Autowired
	PatientService ps;
	
	@GetMapping("/getAllPatients")
	public List<Patients> getAllPatients()
	{
		return ps.getAllPatients();
	}
	
	@GetMapping("/getPatientByPId")
	public Patients getPatientByPId(@RequestParam("patient_id")int patient_id)
	{
		return ps.getPatientByPId(patient_id);
	}
	
	@PostMapping("/regPatient")
	public Patients register(@RequestBody DummyPatients p)
	{
		return ps.register(p);
	}
	@RequestMapping("/getPatientCount")
	public Long pCount()
	{
		return ps.pCount();
	}
	
	@GetMapping("/getPatientByUId")
	public Patients getPatientByUId(@RequestParam("user_id_")int user_id)
	{
		return ps.getPatientByUId(user_id);
	}
	@PostMapping("/addAppointment")
	public Appointment addAppointment(@RequestBody Dummy_Appointment app )
	{
		return ps.addAppointment(app);
	}
	
	@GetMapping("/getAppointmentsofPatient")
	public List<Appointment> getAppointmentsofPatient(@RequestParam ("patient_id")int pid)
	{
		return ps.getAppointmentsofPatient(pid); 
	}
	
	@GetMapping("/appointmentCancellationRequest")
	public boolean appointmentCancellationRequest(@RequestParam("app_id")int app_id)
	{
		return ps.appointmentCancellationRequest(app_id);
	}
	
}
