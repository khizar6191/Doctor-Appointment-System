package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Roles;

public interface RolesRepo extends JpaRepository<Roles, Integer> {

}
