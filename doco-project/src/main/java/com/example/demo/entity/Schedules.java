package com.example.demo.entity;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Time;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name="schedules")
@IdClass(ScheduleID.class)
public class Schedules  {

	@Id
	int id_;
	@Id
	int doctor_id_;
	@Column
	Time start_time_;
	@Column
	Time end_time_;
	@Id
	Date date_;
	public Schedules() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Schedules(int id_, int docotor_id_, Time start_time_, Time end_time_,Date date_) {
		super();
		this.id_ = id_;
		this.doctor_id_ = docotor_id_;
		this.start_time_ = start_time_;
		this.end_time_ = end_time_;
		this.date_ = date_;
	}
	public int getId_() {
		return id_;
	}
	public void setId_(int id_) {
		this.id_ = id_;
	}
	public int getDocotor_id_() {
		return doctor_id_;
	}
	public void setDocotor_id_(int docotor_id_) {
		this.doctor_id_ = docotor_id_;
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
	public Date getDate_() {
		return date_;
	}
	public void setDate_(Date date_) {
		this.date_=date_;
	}
}
