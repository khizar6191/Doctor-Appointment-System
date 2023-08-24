package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="questions")
public class Questions {

	@Id
	int id_;
	@Column
	String questions_;
	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Questions(int id_) {
		super();
		this.id_ = id_;
	
	}
	public Questions(int id_, String questions_) {
		super();
		this.id_ = id_;
		this.questions_ = questions_;
	}
	public int getId_() {
		return id_;
	}
	public void setId_(int id_) {
		this.id_ = id_;
	}
	public String getQuestions_() {
		return questions_;
	}
	public void setQuestions_(String questions_) {
		this.questions_ = questions_;
	}
	
}
