package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Doctors;
import com.example.demo.entity.Locations;
import com.example.demo.entity.Users;
@Repository
public interface DoctorRepo extends JpaRepository<Doctors,Integer> {
	@Query("select d from Doctors d where id_ = :did")
	public Doctors getDoctorByDId(@Param("did") int did);
	

	@Query("select d from Doctors d where location_id_=?1")
	public List< Doctors> getDoctorByLId(@Param("location_id_") Locations location_id_);
	

	@Query("select d from Doctors d where user_id_ = :user_id")
	public Doctors getDoctorByUId(@Param("user_id") Users user_id);
}
