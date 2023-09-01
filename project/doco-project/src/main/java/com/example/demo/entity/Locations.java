package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="locations")
public class Locations {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id_;
	@Column
	String location_Name_;
	public Locations() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Locations(int id_) {
		super();
		this.id_ = id_;
	
	}
	public Locations(int id_, String location_Name_) {
		super();
		this.id_ = id_;
		this.location_Name_ = location_Name_;
	}
	public int getId_() {
		return id_;
	}
	public void setId_(int id_) {
		this.id_ = id_;
	}
	public String getLocation_Name_() {
		return location_Name_;
	}
	public void setLocation_Name_(String location_Name_) {
		this.location_Name_ = location_Name_;
	}
	
}
