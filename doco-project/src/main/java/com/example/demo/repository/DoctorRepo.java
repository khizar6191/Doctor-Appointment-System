package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Doctors;
import com.example.demo.entity.Users;

public interface DoctorRepo extends JpaRepository<Doctors,Integer> {
	@Query("select d from Doctors d where id_ = :did")
	public Doctors getDoctorByDId(@Param("did") int did);

	@Query("select d from Doctors d where user_id_ = :user_id")
	public Doctors getDoctorByUId(@Param("user_id") Users user_id);
}
