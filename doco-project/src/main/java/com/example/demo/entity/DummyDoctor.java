package com.example.demo.entity;

import javax.persistence.Column;

public class DummyDoctor {
	String fname_;
	
	String lname_;

	String email_;

	String gender_;

	String experience_;

	String qualification_;

	String password_;
		String address_;

	String contact_;
	
	String description_;
	int role_id_;
	int status_;
	
	int user_id_;
	int specialities_id_;
	int location_id_;
	String answer_;
	int question_id_;
	public DummyDoctor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DummyDoctor(String fname_, String lname_, String email_, String gender_, String experience_,
			String qualification_, String password_, String address_, String contact_, String description_,
			int role_id_, int status_, int specialities_id_, int location_id_,
			String answer_, int question_id_) {
		super();
		this.fname_ = fname_;
		this.lname_ = lname_;
		this.email_ = email_;
		this.gender_ = gender_;
		this.experience_ = experience_;
		this.qualification_ = qualification_;
		this.password_ = password_;
		this.address_ = address_;
		this.contact_ = contact_;
		this.description_ = description_;
		this.role_id_ = role_id_;
		this.status_ = status_;
		
		this.specialities_id_ = specialities_id_;
		this.location_id_ = location_id_;
		this.answer_ = answer_;
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
	public String getEmail_() {
		return email_;
	}
	public void setEmail_(String email_) {
		this.email_ = email_;
	}
	public String getGender_() {
		return gender_;
	}
	public void setGender_(String gender_) {
		this.gender_ = gender_;
	}
	public String getExperience_() {
		return experience_;
	}
	public void setExperience_(String experience_) {
		this.experience_ = experience_;
	}
	public String getQualification_() {
		return qualification_;
	}
	public void setQualification_(String qualification_) {
		this.qualification_ = qualification_;
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
	public String getDescription_() {
		return description_;
	}
	public void setDescription_(String description_) {
		this.description_ = description_;
	}
	public int getRole_id_() {
		return role_id_;
	}
	public void setRole_id_(int role_id_) {
		this.role_id_ = role_id_;
	}
	public int getStatus_() {
		return status_;
	}
	public void setStatus_(int status_) {
		this.status_ = status_;
	}
	
	public int getUser_id_() {
		return user_id_;
	}
	public void setUser_id_(int user_id_) {
		this.user_id_ = user_id_;
	}
	public int getSpecialities_id_() {
		return specialities_id_;
	}
	public void setSpecialities_id_(int specialities_id_) {
		this.specialities_id_ = specialities_id_;
	}
	public int getLocation_id_() {
		return location_id_;
	}
	public void setLocation_id_(int location_id_) {
		this.location_id_ = location_id_;
	}
	public String getAnswer_() {
		return answer_;
	}
	public void setAnswer_(String answer_) {
		this.answer_ = answer_;
	}
	public int getQuestion_id_() {
		return question_id_;
	}
	public void setQuestion_id_(int question_id_) {
		this.question_id_ = question_id_;
	}
	
}
