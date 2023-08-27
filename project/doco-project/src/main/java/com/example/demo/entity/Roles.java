package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="roles")
public class Roles {

	@Id
	int id_;
	@Column
	String role_type_;
	public Roles() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Roles(int id_, String role_type_) {
		super();
		this.id_ = id_;
		this.role_type_ = role_type_;
	}
	public int getId_() {
		return id_;
	}
	public void setId_(int id_) {
		this.id_ = id_;
	}
	public String getRole_type_() {
		return role_type_;
	}
	public void setRole_type_(String role_type_) {
		this.role_type_ = role_type_;
	}
	
}
