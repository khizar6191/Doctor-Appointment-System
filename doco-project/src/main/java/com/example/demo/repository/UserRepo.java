package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.entity.Users;

public interface UserRepo extends JpaRepository<Users, Integer> {

	@Query("select u from Users u where email_=?1 and password_=?2")
	public Optional<Users> getUser(@Param("email_") String email_,@Param("password_") String password);
	
	@Query("select u from Users u where role_id_=2 and Status_=0")
	public List<Users> getApprove();
	
	 @Transactional
	@Modifying
	@Query("update Users set status_= :as where id_ = :aid")
	public int apporveRequest(@Param("aid") int aid,@Param("as") int as);
	 
	@Query("select a from Users a where role_id_=1 and id_=?1")
	public Users getAdmin(int id);
	 
	 
}																																																																																																																	