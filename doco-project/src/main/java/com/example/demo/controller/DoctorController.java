package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.AppointmentService;
import com.example.demo.Service.DoctorService;
import com.example.demo.entity.Appointment;
import com.example.demo.entity.Doctors;
import com.example.demo.entity.DummyDoctor;
import com.example.demo.entity.Schedules;
import com.example.demo.entity.SlotSchedule;
@CrossOrigin(origins ="http://localhost:3000" )
@RestController
public class DoctorController {
@Autowired
DoctorService ds;
@Autowired
AppointmentService ss;

@GetMapping("/getAllDoctors")
public List<Doctors> getAll(){
	return ds.getAll();
}

@PostMapping("/saveDoctor")
public void Save(@RequestBody DummyDoctor doc)
{
ds.Save(doc);	
}
@GetMapping("/getDoctorByUId")
public Doctors getDoctorByUId(@RequestParam("user_id")int user_id)
{
	return ds.getDoctorByUId(user_id);
}

@GetMapping("/getDoctorBy")
public Doctors getDoctorByDId(@RequestParam("doctor_id_")int doctor_id)
{
	return ds.getDoctorByDId(doctor_id);
}


@PostMapping("/addSchedule")
public Schedules addSchedule(@RequestBody Schedules sch)
{
	return ds.addSchedule(sch);
}
@GetMapping("/getSchedule")
public List<SlotSchedule> getSchedule(@RequestParam("doctor_id_")int did)
{
	return ds.getSchedule(did);
}
@GetMapping("/getDoctorCount")
public long getDoctorCount()
{
	return ds.getDoctorCount();
}
@GetMapping("/getAppointmentsofDoctor")
public List<Appointment> getAppointmentsofDoctor(@RequestParam ("doctor_id_")int did)
{
	return ds.getAppointmentsofDoctor(did); 
}
}
