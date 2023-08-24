package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Doctors;
import com.example.demo.entity.DummyPatients;
import com.example.demo.entity.Dummy_Appointment;
import com.example.demo.entity.Patients;
import com.example.demo.entity.Questions;
import com.example.demo.entity.Roles;
import com.example.demo.entity.Users;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.DoctorRepo;
import com.example.demo.repository.PatientRepo;
import com.example.demo.repository.UserRepo;

@Service
public class PatientService {

	@Autowired
	PatientRepo pr;
	@Autowired
	UserRepo ur;
	@Autowired
	DoctorRepo dr;
	@Autowired
	AppointmentRepository apprepo;
	
	
	
	
	
	public Patients register(DummyPatients p )
	{
		Roles role=new Roles(3,"PAT");
		
		Questions que=new Questions(p.getQuestion_id_());
		
		Users u =new Users(p.getEmail_(),p.getPassword_(),p.getStatus_(),p.getAnswer_(),que,role);     
		
		ur.save(u);
		
		Patients pt=new Patients(p.getDob_(),p.getFname_(),p.getFname_(),p.getGender_(),p.getEmail_(),p.getPassword_(),p.getAddress_(),p.getContact_(),u);
		
		return pr.save(pt);	
	}
	
	
	public Patients getPatientByPId(int patient_id)
	{		
		  Optional<Patients> patientOptional = pr.findById(patient_id);
		    
		    if (patientOptional.isPresent()) {
		        return patientOptional.get();
		    } else {
		        // Handle the case when patient data is not found
		        // For example, you could return null or throw an exception
		        return null;
		    }
	}
	
	
	public Patients getPatientByUId(int user_id)
	{
		Users u=ur.findById(user_id).get();  //findById returns optional---use get method to retrieve
		
		return pr.getPatientByUId(u);
	}
	
	public Appointment addAppointment(Dummy_Appointment app)
	{
		Doctors doc=dr.getDoctorByDId(app.getDoctor_id_());
		Patients pat=getPatientByPId(app.getPatient_id_());
		 int a=app.getStatus_();
		
		Appointment a1=new Appointment(app.getDate_(),pat,app.getTime_(),a,doc);
		return apprepo.save(a1);
	}
	
	
	public List<Patients> getAllPatients()
	{
		return pr.findAll();
	}
	public Long pCount()
	{
		return pr.count();
	}
	
	
}
