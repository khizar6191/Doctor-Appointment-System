package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Doctors;
import com.example.demo.entity.Dummy_Appointment;
import com.example.demo.entity.Patients;



@Repository
@Transactional
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    @Query("SELECT a FROM Appointment a WHERE doctor_id_= :did AND status_ = 1")
     List<Appointment> getAppointmentsofDoctor(@Param("did") Doctors doctorId);
//    
//    @Query("SELECT a.id_, p.fname_, d.fname_, a.time_, a.date_ " +
//            "FROM Appointment a, Patients p, Doctors d " +
//            "WHERE p.id_=a.patient AND d.id_=a.doctor_id_")
//    List<Dummy_Appointment> getAllAppointment();

    
    
}




