package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Appointment;
import com.example.demo.entity.Doctors;



@Repository
@Transactional
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {
    @Query("SELECT a FROM Appointment a WHERE doctor_id_= :did AND status_ = 1")
     List<Appointment> getAppointmentsofDoctor(@Param("did") Doctors doctorId);
}




