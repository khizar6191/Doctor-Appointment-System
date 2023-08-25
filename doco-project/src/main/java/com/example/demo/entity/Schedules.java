package com.example.demo.entity;

import java.sql.Date;
import java.sql.Time;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;

import javax.persistence.Table;

@Entity
@Table(name="schedules")
@IdClass(ScheduleID.class)
public class Schedules {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id_;
	@Column
	int doctor_id_;
	@Id
	Date date_;
	@Column
	Time start_time_,end_time_;
	public Schedules() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Schedules(int doctor_id_, Date date_, Time start_time_, Time end_time_) {
		super();

		this.doctor_id_ = doctor_id_;
		this.date_ = date_;
		this.start_time_ = start_time_;
		this.end_time_ = end_time_;
	}
	public int getId_() {
		return id_;
	}
	public void setId_(int id_) {
		this.id_ = id_;
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
	public Time getStart_time_() {
		return start_time_;
	}
	public void setStart_time_(Time start_time_) {
		this.start_time_ = start_time_;
	}
	public Time getEnd_time_() {
		return end_time_;
	}
	public void setEnd_time_(Time end_time_) {
		this.end_time_ = end_time_;
	}
	
	
	
	
}
