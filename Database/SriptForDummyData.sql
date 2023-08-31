-- Assuming you're using MySQL or a similar database
USE DOCO;

-- Disable foreign key checks temporarily
SET FOREIGN_KEY_CHECKS = 0;

-- Truncate each table


TRUNCATE TABLE Appointments;
TRUNCATE TABLE Patients;
TRUNCATE TABLE Transactions;
TRUNCATE TABLE Schedules;
TRUNCATE TABLE Doctors;
TRUNCATE TABLE Users;
TRUNCATE TABLE Specialities;
TRUNCATE TABLE Roles;
TRUNCATE TABLE SubscriptionPlans;
TRUNCATE TABLE Questions;

TRUNCATE TABLE Locations;

-- Enable foreign key checks again
SET FOREIGN_KEY_CHECKS = 1;
USE DOCO;
INSERT INTO Roles (id_, role_type_) VALUES
(1, 'ADM'),
(2, 'DOC'),
(3, 'PAT');

-- Specialities
INSERT INTO Specialities (id_, specialities_Name_) VALUES
(1, 'Dermatology'),
(2, 'Cardiology'),

(3, 'Neurology'),
(4, 'Orthopedics'),
(5, 'Gynaecology'),

(6, 'Oncologist'),
(7, 'Gastroenterologist'),
(8, 'Pediatrics'),
(9, 'Radiology'),
(10, 'Endocrinologist');

-- Locations
INSERT INTO Locations (id_, location_Name_) VALUES
(1, 'Pimpri-Chinchwad'),
(2, 'Viman Nagar'),
(3, 'Baner'),
(4, 'koregaon Park'),
(5, 'Hadapsar'),
(6, 'kothrud'),
(7, 'kharadi'),
(8, 'Hinjewadi'),
(9, 'Shivaji Nagar'),
(10, 'Deccan'),
(11, 'kondwa');

-- SubscriptionPlans
INSERT INTO SubscriptionPlans (id_, plan_name_, descripOfSub_, monthly_price_, status_) VALUES
(1, 'Basic', 'Basic Plan', 50, 1),
(2, 'Standard', 'Standard Plan', 100, 1),
(3, 'Premium', 'Premium Plan', 200, 1);

-- Questions
INSERT INTO Questions (id_, questions_) VALUES
(1, 'What is your nick name ?'),
(2, 'What is your native place ?'),
(3, 'What is your fvt movie?'),
(4, 'What is your fvt actor ?'),
(5, 'What is your fvt color ?');



-- Users
INSERT INTO Users (id_, role_id_, email_,password_, question_id_, answer_, status_) VALUES
(1, 1, 'admin@example.com', 'admin_password', 5, 'Blue', 0),
(2, 2, 'D@example.com', '123', 5, 'Blue', 1),
(3, 3, 'p@example.com', '123', 5, 'Blue', 1);


-- Doctors
INSERT INTO Doctors (id_, fname_,email_, lname_, gender_, experience_, user_id_, qualification_, password_,address_, contact_, location_id_, specialities_id_, description_, status_) VALUES
(1, 'John','john@gmail.com', 'Doe', 'Male', 10, 1, 'MD', 'doctor_password', '123 Main St', '123-456-7890', 1, 1, 'Experienced cardiologist', 1);

-- Schedules
INSERT INTO Schedules (id_, doctor_id_, start_time_, end_time_,date_ ) VALUES
(1, 1, '09:00:00', '12:00:00','2023-08-20');

-- Transactions
INSERT INTO Transactions (id_, doctor_id_, subscription_id_, payment_date_, amount_, payment_method_) VALUES
(1, 1, 1, '2023-08-01', 50, 'Credit Card');

-- Patients
INSERT INTO Patients (id_, user_id_, fname_, lname_, gender_, email_, password_,address_, dob_, contact_) VALUES
(1, 3, 'Alice', 'Smith', 'Female', 'alice@example.com', 'patient_password','456 Elm St', '1990-05-15', "98765432");

-- Appointments
INSERT INTO Appointments (id_, patient_id_, time_,doctor_id_, date_, status_) VALUES
(1, 1, '09:00:00',1,'2023-08-30', 1);


