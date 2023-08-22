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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_` int NOT NULL AUTO_INCREMENT,
  `role_id_` int DEFAULT NULL,
  `email_` varchar(255) NOT NULL,
  `password_` varchar(255) DEFAULT NULL,
  `question_id_` int NOT NULL,
  `answer_` varchar(255) NOT NULL,
  `status_` int NOT NULL,
  PRIMARY KEY (`id_`),
  KEY `role_id_` (`role_id_`),
  KEY `question_id_` (`question_id_`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id_`) REFERENCES `roles` (`id_`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`question_id_`) REFERENCES `questions` (`id_`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'admin@example.com','admin_password',1,'Blue',0),(2,2,'p@example.com','123',2,'Blue',1),(3,2,'doc@gmail.com','doctor_password',1,'blue',0),(4,2,'doc@gmail.com','doctor_password',1,'blue',0),(5,2,'doc@gmail.com','doctor_password',1,'blue',0),(6,2,'doc@gmail.com','doctor_password',1,'mai gandu',0),(7,2,'Khi@gmail.com','A@123',1,'khizu',0),(8,2,'Khi@gmail.com','A@123',1,'a',0),(9,2,'Khi@gmail.com','A@123',3,'545545',0),(10,2,'Khi@gmail.com','A@123',2,'123',0),(11,2,'Khi@gmail.com','A@123',2,'1232',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-18 10:57:58
