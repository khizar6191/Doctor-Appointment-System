package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Users;
import com.example.demo.repository.AppointmentRepository;
import com.example.demo.repository.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo ur;
	@Autowired
	AppointmentRepository apprepo;
	public List<Users>getUsers()
	{
		return ur.findAll();
	}
	public Users getUserById(int user_id_)
	{	
		return ur.findById(user_id_).get();
	}
	public Users getLogin(String email,String password)
	{
		Users l;
		Optional<Users> login=ur.getUser(email, password);
		try {
			l=login.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		return l;
	}public List<Users> getApprove(){
		return ur.getApprove();
	}
	@Transactional
	public int apporveRequest(@Param("aid") int aid,@Param("as") int as)
	{
		return ur.apporveRequest(aid, as);
	}
	
 public Users getAdmin(int id)
 {
	 return ur.getAdmin(id);
 }
	
	 
}
