package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Doctors;
import com.example.demo.entity.Patients;



@Repository
@Transactional
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    @Query("SELECT a FROM Appointment a WHERE doctor_id_= :did AND status_ = 1")
     List<Appointment> getAppointmentsofDoctor(@Param("did") Doctors doctorId);
    
    @Query("Select a from Appointment a where patient = :pid and status_=1 ")
	public List<Appointment> getAppointmentsofPatient(@Param("pid") Patients pid);
    
    @Modifying
	@Query("update Appointment set status_=0 where id_ = :aid")
	public int appointmentCancellationRequest(@Param("aid") int aid);
}




