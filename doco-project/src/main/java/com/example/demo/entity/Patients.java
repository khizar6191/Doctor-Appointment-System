package com.example.demo.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="patients")
public class Patients {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id_;
	
	@Column
	Date dob_;
	
	@Column
	String fname_,lname_,gender_,email_,password_,address_,contact_;
	
	@OneToOne
	@JoinColumn(name="user_id_")
	Users user_id_;

	public Patients() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Patients(Date dob_, String fname_, String lname_, String gender_, String email_, String password_,
			String address_, String contact_, Users user_id_) {
		super();
		this.dob_ = dob_;
		this.fname_ = fname_;
		this.lname_ = lname_;
		this.gender_ = gender_;
		this.email_ = email_;
		this.password_ = password_;
		this.address_ = address_;
		this.contact_ = contact_;
		this.user_id_ = user_id_;
	}

	public int getId_() {
		return id_;
	}

	public void setId_(int id_) {
		this.id_ = id_;
	}

	public Date getDob_() {
		return dob_;
	}

	public void setDob_(Date dob_) {
		this.dob_ = dob_;
	}

	public String getFname_() {
		return fname_;
	}

	public void setFname_(String fname_) {
		this.fname_ = fname_;
	}

	public String getLname_() {
		return lname_;
	}

	public void setLname_(String lname_) {
		this.lname_ = lname_;
	}

	public String getGender_() {
		return gender_;
	}

	public void setGender_(String gender_) {
		this.gender_ = gender_;
	}

	public String getEmail_() {
		return email_;
	}

	public void setEmail_(String email_) {
		this.email_ = email_;
	}

	public String getPassword_() {
		return password_;
	}

	public void setPassword_(String password_) {
		this.password_ = password_;
	}

	public String getAddress_() {
		return address_;
	}

	public void setAddress_(String address_) {
		this.address_ = address_;
	}

	public String getContact_() {
		return contact_;
	}

	public void setContact_(String contact_) {
		this.contact_ = contact_;
	}

	public Users getUser_id_() {
		return user_id_;
	}

	public void setUser_id_(Users user_id_) {
		this.user_id_ = user_id_;
	}
	
}
