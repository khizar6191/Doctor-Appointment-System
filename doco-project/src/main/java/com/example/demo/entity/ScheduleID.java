package com.example.demo.entity;

import java.io.Serializable;
import java.sql.Date;

public class ScheduleID implements Serializable {
	
	int doctor_id_;
	
	Date date_;

	public ScheduleID() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ScheduleID(int doctor_id_, Date date_) {
		super();
		this.doctor_id_ = doctor_id_;
		this.date_ = date_;
	}

	public int getDoctor_id_() {
		return doctor_id_;
	}

	public void setDoctor_id_(int doctor_id_) {
		this.doctor_id_ = doctor_id_;
	}

	public Date getDate_() {
		return date_;
	}

	public void setDate_(Date date_) {
		this.date_ = date_;
	}
	

}