package com.example.demo.entity;

import java.sql.Date;
import java.util.List;

public class SlotSchedule {

	Date date_;
	List<Slots> slots;
	public SlotSchedule() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SlotSchedule(Date date_, List<Slots> slots) {
		super();
		this.date_ = date_;
		this.slots = slots;
	}
	public Date getDate_() {
		return date_;
	}
	public void setDate_(Date date_) {
		this.date_ = date_;
	}
	public List<Slots> getSlots() {
		return slots;
	}
	public void setSlots(List<Slots> slots) {
		this.slots = slots;
	}
	
	
}
