-- Assuming you're using MySQL or a similar database
USE DOCO;

-- Disable foreign key checks temporarily
SET FOREIGN_KEY_CHECKS = 0;

-- Truncate each table
TRUNCATE TABLE SpecialitiesOfDoctors;
TRUNCATE TABLE DayAvailables;
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
TRUNCATE TABLE Days;
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
(1, 'Cardiology'),
(2, 'Dermatology'),
(3, 'Orthopedics');

-- Locations
INSERT INTO Locations (id_, location_Name_) VALUES
(1, 'Pune'),
(2, 'Mumbai'),
(3, 'Delhi');

-- SubscriptionPlans
INSERT INTO SubscriptionPlans (id_, plan_name_, descripOfSub_, monthly_price_, status_) VALUES
(1, 'Basic', 'Basic Plan', 50, 1),
(2, 'Standard', 'Standard Plan', 100, 1),
(3, 'Premium', 'Premium Plan', 200, 1);

-- Questions
INSERT INTO Questions (id_, questions_) VALUES
(1, 'What is your favorite color?'),
(2, 'What is your pet\'s name?'),
(3, 'What city were you born in?');

-- Days
INSERT INTO Days (id_, day_) VALUES
(1, 'Monday'),
(2, 'Tuesday'),
(3, 'Wednesday'),
(4, 'Thursday'),
(5, 'Friday');

-- Users
INSERT INTO Users (id_, role_id_, email_,password_, question_id_, answer_, status_) VALUES
(1, 1, 'admin@example.com', 'admin_password', 1, 'Blue', 0),
(2, 2, 'p@example.com', '123', 2, 'Blue', 1);

-- Doctors
INSERT INTO Doctors (id_, fname_, lname_, gender_, experience_, user_id_, qualification_, password_,address_, contact_, location_id_, specialities_id_, description_, status_) VALUES
(1, 'John', 'Doe', 'Male', 10, 1, 'MD', 'doctor_password', '123 Main St', '123-456-7890', 1, 1, 'Experienced cardiologist', 1);

-- Schedules
INSERT INTO Schedules (id_, doctor_id_, start_time_, end_time_) VALUES
(1, 1, '09:00:00', '12:00:00');

-- Transactions
INSERT INTO Transactions (id_, doctor_id_, subscription_id_, payment_date_, amount_, payment_method_) VALUES
(1, 1, 1, '2023-08-01', 50, 'Credit Card');

-- Patients
INSERT INTO Patients (id_, user_id_, fname_, lname_, gender_, email_, password_,address_, dob_, contact_) VALUES
(1, 2, 'Alice', 'Smith', 'Female', 'alice@example.com', 'patient_password','456 Elm St', '1990-05-15', "98765432");

-- Appointments
INSERT INTO Appointments (id_, patient_id_, time_, schedule_id_, status_) VALUES
(1, 1, '09:00:00', 1, 1);

-- DayAvailables
INSERT INTO DayAvailables (doctor_id_, day_id_) VALUES
(1, 1),
(1, 3);

-- SpecialitiesOfDoctors
INSERT INTO SpecialitiesOfDoctors (doctor_id_, speciality_id_) VALUES
(1, 1),
(1, 2);
