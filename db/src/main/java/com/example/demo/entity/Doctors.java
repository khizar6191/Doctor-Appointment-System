package com.example.demo.entity;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

@Entity
@Table(name="doctors")
public class Doctors {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id_;
	@Column
	String fname_;
	@Column
	String lname_;
	@Column
	String email_;
	@Column
	String gender_;
	@Column
	String experience_;
	@Column
	String qualification_;
	@Column
	String password_;
	@Column
	String address_;
	@Column
	String contact_;
	@Column
	String description_;
	
	@Column
	int status_;
	@OneToOne
	@JoinColumn(name="user_id_")
	Users user_id_;
	
	@ManyToOne
	@JoinColumn(name="specialities_id_")
	Specialities specialities_id_;
	
	@ManyToOne
	@JoinColumn(name="location_id_")
	Locations location_id_;

	public Doctors() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Doctors( String fname_, String lname_, String email_, String gender_, String experience_,
			String qualification_, String password_, String address_, String contact_, String description_,
			 int status_, Users user_id_, Specialities specialities_id_, Locations location_id_) {
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
		
		this.status_ = status_;
		this.user_id_ = user_id_;
		this.specialities_id_ = specialities_id_;
		this.location_id_ = location_id_;
	}

	public int getId_() {
		return id_;
	}

	public void setId_(int id_) {
		this.id_ = id_;
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

	

	public int getStatus_() {
		return status_;
	}

	public void setStatus_(int status_) {
		this.status_ = status_;
	}

	public Users getUser_id_() {
		return user_id_;
	}

	public void setUser_id_(Users user_id_) {
		this.user_id_ = user_id_;
	}

	public Specialities getSpecialities_id_() {
		return specialities_id_;
	}

	public void setSpecialities_id_(Specialities specialities_id_) {
		this.specialities_id_ = specialities_id_;
	}

	public Locations getLocation_id_() {
		return location_id_;
	}

	public void setLocation_id_(Locations location_id_) {
		this.location_id_ = location_id_;
	}
	

}
