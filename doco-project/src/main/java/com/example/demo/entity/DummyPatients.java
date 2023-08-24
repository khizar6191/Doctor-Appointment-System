package com.example.demo.entity;

import java.sql.Date;

public class DummyPatients {
	
	int role_id_,question_id_,status_;
	String fname_,lname_,gender_,email_,password_,address_,contact_,answer_;
	Date dob_;
	public DummyPatients() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

		
	public DummyPatients( int question_id_, int status_, String fname_, String lname_, String gender_,
			String email_, String password_, String address_, String contact_, String answer_, Date dob_) {
		super();
		
		this.question_id_ = question_id_;
		this.status_ = status_;
		this.fname_ = fname_;
		this.lname_ = lname_;
		this.gender_ = gender_;
		this.email_ = email_;
		this.password_ = password_;
		this.address_ = address_;
		this.contact_ = contact_;
		this.answer_ = answer_;
		this.dob_ = dob_;
	}

	
	public int getStatus_() {
		return status_;
	}




	public void setStatus_(int status_) {
		this.status_ = status_;
	}




	public String getAnswer_() {
		return answer_;
	}

	public void setAnswer_(String answer_) {
		this.answer_ = answer_;
	}

	public int getRole_id_() {
		return role_id_;
	}
	public void setRole_id_(int role_id_) {
		this.role_id_ = role_id_;
	}
	public int getQuestion_id_() {
		return question_id_;
	}
	public void setQuestion_id_(int question_id_) {
		this.question_id_ = question_id_;
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
	public Date getDob_() {
		return dob_;
	}
	public void setDob_(Date dob_) {
		this.dob_ = dob_;
	}
}
