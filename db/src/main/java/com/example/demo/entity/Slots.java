package com.example.demo.entity;

import java.time.LocalTime;

public class Slots {
LocalTime slot_time_;
	
	int status_;

	public Slots() {
		super();
		this.status_=1;
		// TODO Auto-generated constructor stub
	}

	public Slots(LocalTime slot_time, int status) {
		super();
		this.slot_time_ = slot_time;
		this.status_ = status;
	}

	public LocalTime getSlot_time() {
		return slot_time_;
	}

	public void setSlot_time(LocalTime slot_time) {
		this.slot_time_ = slot_time;
	}

	public int getStatus() {
		return status_;
	}

	public void setStatus(int status) {
		this.status_ = status;
	}

}
