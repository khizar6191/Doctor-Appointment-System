
package com.example.demo.repository;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Schedules;
@Repository
@Transactional
public interface SchRepository extends JpaRepository<Schedules, Integer> {
	@Query("select s from Schedules s where doctor_id_=?1")
	public List<Schedules> getById(int id);


//	@Query("SELECT d.fname_,d.lname_ ,s.start_time_, s.end_time_ FROM Schedules s INNER JOIN Doctors d ON s.id_ = d.id_")
//	public List<Object[]> getSch();

	@Query("select s from Schedules s where doctor_id_= :did")
	public List<Schedules> getByDoctorId(@Param("did") int did);
}
