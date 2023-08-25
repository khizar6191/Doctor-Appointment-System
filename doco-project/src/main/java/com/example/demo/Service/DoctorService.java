package com.example.demo.Service;
import java.util.ArrayList;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Doctors;
import com.example.demo.entity.DummyDoctor;
import com.example.demo.entity.Locations;
import com.example.demo.entity.Questions;
import com.example.demo.entity.Roles;
import com.example.demo.entity.Schedules;
import com.example.demo.entity.SlotSchedule;
import com.example.demo.entity.Slots;
import com.example.demo.entity.Specialities;
import com.example.demo.entity.Users;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.DoctorRepo;
import com.example.demo.repository.SchRepository;
import com.example.demo.repository.UserRepo;

@Service
public class DoctorService {

	@Autowired
	DoctorRepo dr;
	@Autowired
	UserRepo ur;

	@Autowired
	SchRepository srepo;

	
	@Autowired
	AppointmentRepository ap;

	public List<Doctors> getAll()
	{
		return dr.findAll();
	}
	
	public Doctors getDoctorByDId(int doctor_id)
	{	
		return dr.findById(doctor_id).get();
	}
	
	public Doctors getDoctorByUId(int user_id)
	{
		Users u=ur.findById(user_id).get();  //findById returns optional---use get method to retrieve
		
		return dr.getDoctorByUId(u);
	}
	public void Save(DummyDoctor doc)
	{	Roles r=new Roles(2,"DOC");
		Questions q=new Questions(doc.getQuestion_id_());
		Specialities s=new Specialities(doc.getSpecialities_id_());
		Locations l =new Locations(doc.getLocation_id_());
		Users u=new Users(doc.getEmail_(),doc.getPassword_(),doc.getStatus_(),doc.getAnswer_(),
				q,r);
		ur.save(u);
		Doctors doct=new Doctors(doc.getFname_(),doc.getLname_(),doc.getEmail_(),doc.getGender_(),
				doc.getExperience_(),doc.getQualification_(),doc.getPassword_(),doc.getAddress_(),
				doc.getContact_(),doc.getDescription_(),doc.getStatus_(),u,s,l);
		
		dr.save(doct);
	}
	public long getDoctorCount()
	{
		return dr.count();
	}
	 public Schedules addSchedule(Schedules sch)
		{
			return srepo.save(sch);
		}
	 
	 
//	 public List<Appointment> getAppointmentsofDoctor(int user_id)
//		{
//			 int dr=getDoctorByUId(user_id).getId_();
//			 
//			 Doctors d=getDoctorByDId(dr);
//			
//			return ap.getAppointmentsofDoctor(d);
//		}
		public List<Appointment> getAppointmentsofDoctor(int did)
		{
			Doctors doc=getDoctorByDId(did);
			
			return ap.getAppointmentsofDoctor(doc);
		}
	 
	 public List<SlotSchedule> getSchedule(int did)
		{
			List<Schedules> list =srepo.getByDoctorId(did);
			List<SlotSchedule> sl=new ArrayList<>();
			
			for(Schedules s:list)
			{
				SlotSchedule ss=new SlotSchedule();
				System.out.println(s.getDate_());
				ss.setDate_(s.getDate_());
				
				try 
				{
						LocalTime st=s.getStart_time_().toLocalTime();
						LocalTime et=s.getEnd_time_().toLocalTime();
						List<Slots> tl=new ArrayList<>();
						do
						{
							Slots slot=new Slots();
							slot.setSlot_time(st);
							tl.add(slot);
							st=st.plusMinutes(30);
						}while(!(st.equals(et)));
						ss.setSlots(tl);
						sl.add(ss);
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
			}
			
			//changing status if slot is already booked
			Doctors d=dr.getDoctorByDId(did);
			
			List<Appointment> app_list=ap.getAppointmentsofDoctor(d);
			
			for(SlotSchedule ssl:sl)
			{
				for(Appointment apoint:app_list)
				{
					if(ssl.getDate_().equals(apoint.getDate_()))
					{
						
						for(Slots slots:ssl.getSlots())
						{
							LocalTime ti=apoint.getTime_().toLocalTime();
							if(slots.getSlot_time().equals(ti))
							{
								slots.setStatus(0);
							}
						}
					}
				}
			}
			return sl;
		}
	
	 
	
}
