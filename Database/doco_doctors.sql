-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: doco
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctors` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `fname_` varchar(255) NOT NULL,
  `email_` varchar(255) NOT NULL,
  `lname_` varchar(255) NOT NULL,
  `gender_` varchar(255) NOT NULL,
  `experience_` int NOT NULL,
  `user_id_` int NOT NULL,
  `qualification_` varchar(255) NOT NULL,
  `password_` varchar(255) NOT NULL,
  `address_` varchar(255) NOT NULL,
  `contact_` varchar(255) NOT NULL,
  `location_id_` int NOT NULL,
  `specialities_id_` int NOT NULL,
  `description_` varchar(255) NOT NULL,
  `status_` int NOT NULL,
  PRIMARY KEY (`id_`),
  KEY `location_id_` (`location_id_`),
  KEY `specialities_id_` (`specialities_id_`),
  KEY `user_id_` (`user_id_`),
  CONSTRAINT `doctors_ibfk_1` FOREIGN KEY (`location_id_`) REFERENCES `locations` (`id_`),
  CONSTRAINT `doctors_ibfk_2` FOREIGN KEY (`specialities_id_`) REFERENCES `specialities` (`id_`),
  CONSTRAINT `doctors_ibfk_3` FOREIGN KEY (`user_id_`) REFERENCES `users` (`id_`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,'John','doc@gmail.com','Doe','Male',10,1,'MD','doctor_password','123 Main St','123-456-7890',1,1,'Experienced cardiologist',1),(3,'John','doc@gmail.com','Doe','Male',10,5,'MD','doctor_password','123 Main St','123-456-7890',3,2,'Experienced cardiologist',0),(4,'amir ki amiri gand','doc@gmail.com','jo jalti rehti bhai ki gand mai aag hai','Male',10,6,'MD','doctor_password','123 Main St','123-456-7890',3,2,'Experienced cardiologist',0),(6,'Khi','Khi@gmail.com','Bag','Male',1,11,'DNB','A@123','aa','8787878787',2,2,'dfsdfsdfsdf',0);
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-18 10:57:56
