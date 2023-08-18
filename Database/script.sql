drop database if exists doco;
CREATE DATABASE IF NOT EXISTS DOCO;
use DOCO;
-- Role Table
CREATE TABLE IF NOT EXISTS Roles (
    id_ INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
role_type_ CHAR(3) NOT NULL
);

-- Specializations
CREATE TABLE IF NOT EXISTS Specialities (
	id_ INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
specialities_Name_ VARCHAR(255) NOT NULL
);

-- Location
CREATE TABLE IF NOT EXISTS Locations (
    id_ INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
location_Name_ VARCHAR(255) NOT NULL
);

-- SubscriptionPlans
CREATE TABLE IF NOT EXISTS SubscriptionPlans (
    id_ INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    plan_name_ VARCHAR(255) NOT NULL,
    descripOfSub_ VARCHAR(255) NOT NULL,
    monthly_price_ INT NOT NULL,
    status_ INT NOT NULL NOT NULL
);
-- Questions
CREATE TABLE IF NOT EXISTS  Questions (
    id_ INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    questions_ VARCHAR(255) NOT NULL
);
-- Days
CREATE TABLE IF NOT EXISTS Days (
    id_ INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    day_ VARCHAR(255) NOT NULL
);


-- User table
CREATE TABLE IF NOT EXISTS Users (
    id_ INT PRIMARY KEY  AUTO_INCREMENT,
    role_id_ INT,
    email_ VARCHAR(255) NOT NULL,
    password_ VARCHAR(255),
 question_id_ INT NOT NULL,
      answer_ VARCHAR(255) NOT NULL,
    status_ INT NOT NULL,
    FOREIGN KEY (role_id_) REFERENCES Roles(id_),
      FOREIGN KEY (question_id_) REFERENCES Questions(id_)
);


-- Doctor
CREATE TABLE IF NOT EXISTS Doctors (
    id_ INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
	fname_  VARCHAR(255) NOT NULL,
    lname_  VARCHAR(255) NOT NULL,
     gender_  VARCHAR(255) NOT NULL,
experience_  INT NOT NULL,
    user_id_ INT NOT NULL,
    qualification_ VARCHAR(255) NOT NULL,
    password_ VARCHAR(255) NOT NULL,
   address_ VARCHAR(255) NOT NULL,
    contact_ VARCHAR(255) NOT NULL,
    location_id_ INT NOT NULL,
    specialities_id_ INT NOT NULL,
    description_ VARCHAR(255) NOT NULL,
  
    status_ INT NOT NULL,
    FOREIGN KEY (location_id_) REFERENCES Locations (id_),
    FOREIGN KEY (specialities_id_) REFERENCES Specialities (id_),
  FOREIGN KEY (user_id_) REFERENCES Users (id_)
);



-- Schedule
CREATE TABLE IF NOT EXISTS Schedules (
    id_ INT PRIMARY KEY NOT NULL  AUTO_INCREMENT,
    doctor_id_ INT NOT NULL,
    start_time_ TIME NOT NULL,
    end_time_ TIME NOT NULL,
    FOREIGN KEY (doctor_id_) REFERENCES Doctors(id_)
);

-- Transactions
CREATE TABLE IF NOT EXISTS Transactions (
    id_ INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    doctor_id_ INT NOT NULL,
    subscription_id_ INT NOT NULL,
    payment_date_ DATE NOT NULL,
    amount_ INT NOT NULL,
    payment_method_ VARCHAR(255) NOT NULL,
    FOREIGN KEY (doctor_id_) REFERENCES Doctors (id_),
 FOREIGN KEY (subscription_id_) REFERENCES SubscriptionPlans (id_)
);

-- Patient Table
CREATE TABLE IF NOT EXISTS Patients (
    id_ INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    user_id_ int NOT NULL,
    fname_  VARCHAR(255) NOT NULL,
    lname_  VARCHAR(255) NOT NULL,
     gender_  VARCHAR(255) NOT NULL,
email_ VARCHAR(255) NOT NULL,
    password_ VARCHAR(255) NOT NULL,
    address_ VARCHAR(255) NOT NULL,
dob_ DATE NOT NULL,
    contact_ Varchar(255) NOT NULL,
FOREIGN KEY (user_id_) REFERENCES Users (id_)

);

-- Appointments
CREATE TABLE IF NOT EXISTS Appointments (
    id_ INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    patient_id_ INT NOT NULL,
    time_ TIME NOT NULL,
    schedule_id_ INT NOT NULL,
    status_ INT NOT NULL,
    FOREIGN KEY (patient_id_) REFERENCES Patients(id_),
    FOREIGN KEY (schedule_id_) REFERENCES Schedules(id_)
);

-- DaysAvailbales
CREATE TABLE IF NOT EXISTS DayAvailables (
    doctor_id_ INT NOT NULL,
    day_id_ INT NOT NULL,
FOREIGN KEY (doctor_id_) REFERENCES appointments(id_),
    FOREIGN KEY (day_id_) REFERENCES Days(id_)
);

-- SpecializationsOfDoctor
CREATE TABLE IF NOT EXISTS SpecialitiesOfDoctors (
	doctor_id_ INT NOT NULL,
    speciality_id_ INT NOT NULL,
FOREIGN KEY (doctor_id_) REFERENCES Doctors(id_),
      FOREIGN KEY (speciality_id_) REFERENCES Specialities(id_)
    
);