package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Locations;

public interface LocationRepository extends JpaRepository<Locations, Integer> {
	
	

}
