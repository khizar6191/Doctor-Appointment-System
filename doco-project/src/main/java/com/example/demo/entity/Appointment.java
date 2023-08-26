package com.example.demo.entity;

import java.sql.Date;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_")
    private int id_;

    @Column
	Date date_;

    @ManyToOne
    @JoinColumn(name = "patient_id_")
    
   Patients patient; 

    @Column(name = "time_")
     Time time_;

    @Column(name = "status_")
   int status_;
    
    @ManyToOne
	@JoinColumn(name="doctor_id_")
	Doctors doctor_id_;

	public Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Appointment(Date date_, Patients patient, Time time_, int status_, Doctors doctors_id_) {
		super();
		this.date_ = date_;
		this.patient = patient;
		this.time_ = time_;
		this.status_ = status_;
		this.doctor_id_ = doctors_id_;
	}
    
	


	public Date getDate_() {
		return date_;
	}



	public void setDate_(Date date_) {
		this.date_ = date_;
	}



	public int getId_() {
		return id_;
	}

	public void setId_(int id_) {
		this.id_ = id_;
	}



	public Patients getPatient() {
		return patient;
	}

	public void setPatient(Patients patient) {
		this.patient = patient;
	}

	public Time getTime_() {
		return time_;
	}

	public void setTime_(Time time_) {
		this.time_ = time_;
	}

	public int getStatus_() {
		return status_;
	}

	public void setStatus_(int status_) {
		this.status_ = status_;
	}

	public Doctors getDoctors_id_() {
		return doctor_id_;
	}

	public void setDoctors_id_(Doctors doctors_id_) {
		this.doctor_id_ = doctors_id_;
	}

}
