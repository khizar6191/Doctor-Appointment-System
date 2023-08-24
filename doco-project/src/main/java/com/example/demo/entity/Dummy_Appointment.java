package com.example.demo.entity;

import java.sql.Date;
import java.sql.Time;

public class Dummy_Appointment {
	Date date_;
	int doctor_id_,patient_id_,status_;
	Time time_;
	public Dummy_Appointment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Dummy_Appointment(Date date_, int doctor_id_, int patient_id_, int status_, Time time_) {
		super();
		this.date_ = date_;
		this.doctor_id_ = doctor_id_;
		this.patient_id_ = patient_id_;
		this.status_ = status_;
		this.time_ = time_;
	}
	public Date getDate_() {
		return date_;
	}
	public void setDate_(Date date_) {
		this.date_ = date_;
	}
	public int getDoctor_id_() {
		return doctor_id_;
	}
	public void setDoctor_id_(int doctor_id_) {
		this.doctor_id_ = doctor_id_;
	}
	public int getPatient_id_() {
		return patient_id_;
	}
	public void setPatient_id_(int patient_id_) {
		this.patient_id_ = patient_id_;
	}
	public int getStatus_() {
		return status_;
	}
	public void setStatus_(int status_) {
		this.status_ = status_;
	}
	public Time getTime_() {
		return time_;
	}
	public void setTime_(Time time_) {
		this.time_ = time_;
	}
	
	
	
	
}
