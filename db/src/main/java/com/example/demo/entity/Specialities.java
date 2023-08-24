package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="specialities")
public class Specialities {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id_;
	@Column
	String specialities_Name_;
	public Specialities() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Specialities(int id_) {
		super();
		this.id_ = id_;
		
	}
	public Specialities(int id_, String specialities_Name_) {
		super();
		this.id_ = id_;
		this.specialities_Name_ = specialities_Name_;
	}
	public int getId_() {
		return id_;
	}
	public void setId_(int id_) {
		this.id_ = id_;
	}
	public String getSpecialities_Name_() {
		return specialities_Name_;
	}
	public void setSpecialities_Name_(String specialities_Name_) {
		this.specialities_Name_ = specialities_Name_;
	}
	
}
