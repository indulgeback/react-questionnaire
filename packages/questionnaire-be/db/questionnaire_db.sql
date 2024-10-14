/*
 Navicat Premium Dump SQL

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80039 (8.0.39)
 Source Host           : localhost:3306
 Source Schema         : questionnaire_db

 Target Server Type    : MySQL
 Target Server Version : 80039 (8.0.39)
 File Encoding         : 65001

 Date: 14/10/2024 19:00:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `title` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `answer_count` int NOT NULL,
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_published` tinyint NOT NULL DEFAULT '0',
  `is_star` tinyint NOT NULL DEFAULT '0',
  `is_deleted` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question
-- ----------------------------
BEGIN;
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 1', 1, 2, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 2', 2, 4, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 3', 3, 2, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 4', 4, 7, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 5', 5, 7, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 6', 6, 1, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 7', 7, 0, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 8', 8, 7, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 9', 9, 1, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 10', 10, 3, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 11', 11, 0, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 12', 12, 2, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 13', 13, 4, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 14', 14, 8, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 15', 15, 0, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 16', 16, 3, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 17', 17, 1, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 18', 18, 2, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 19', 19, 4, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 20', 20, 6, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 21', 21, 6, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 22', 22, 0, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 23', 23, 0, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 24', 24, 4, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 25', 25, 2, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 26', 26, 9, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 27', 27, 6, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 28', 28, 6, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 29', 29, 3, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 30', 30, 1, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 31', 31, 5, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 32', 32, 2, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 33', 33, 1, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 34', 34, 2, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 35', 35, 7, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 36', 36, 4, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 37', 37, 2, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 38', 38, 3, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 39', 39, 3, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 40', 40, 5, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 41', 41, 9, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 42', 42, 5, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 43', 43, 0, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 44', 44, 4, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 45', 45, 4, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 46', 46, 7, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 47', 47, 9, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 48', 48, 1, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 49', 49, 7, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 50', 50, 2, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 51', 51, 6, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 52', 52, 4, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 53', 53, 2, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 54', 54, 6, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 55', 55, 7, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 56', 56, 1, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 57', 57, 6, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 58', 58, 5, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 59', 59, 6, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 60', 60, 6, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 61', 61, 4, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 62', 62, 9, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 63', 63, 1, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 64', 64, 2, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 65', 65, 0, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 66', 66, 9, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 67', 67, 3, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 68', 68, 7, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 69', 69, 7, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 70', 70, 8, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 71', 71, 7, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 72', 72, 0, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 73', 73, 5, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 74', 74, 2, '2024-10-11 16:00:27', 0, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 75', 75, 1, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 76', 76, 2, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 77', 77, 0, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 78', 78, 6, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 79', 79, 3, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 80', 80, 5, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 81', 81, 5, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 82', 82, 2, '2024-10-11 16:00:27', 1, 0, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 83', 83, 0, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 84', 84, 0, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 85', 85, 4, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 86', 86, 9, '2024-10-11 16:00:27', 1, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 87', 87, 3, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 88', 88, 2, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 89', 89, 4, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 90', 90, 0, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 91', 91, 1, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 92', 92, 7, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 93', 93, 8, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 94', 94, 5, '2024-10-11 16:00:27', 0, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 95', 95, 6, '2024-10-11 16:00:27', 0, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 96', 96, 8, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 97', 97, 9, '2024-10-11 16:00:27', 1, 1, 1);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 98', 98, 1, '2024-10-11 16:00:27', 0, 1, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 99', 99, 1, '2024-10-11 16:00:27', 1, 0, 0);
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`) VALUES ('Question 100', 100, 1, '2024-10-11 16:00:27', 0, 1, 1);
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `username`, `password`, `nickname`) VALUES (8, 'LeviLiu', '$2b$10$P0FoWb7hnw/VkSrYAnv9iuqJ9Zw.4jB7T2J24slOnGgPHxc0plgGS', 'Redux');
INSERT INTO `user` (`id`, `username`, `password`, `nickname`) VALUES (9, 'LeviLiu1', '$2b$10$xBseyVzvBXQYQGMbrOFXVOZ7cBgg.bM3dphp/FPLE1d.vbViTID2u', 'Redux');
COMMIT;

-- ----------------------------
-- Procedure structure for InsertTestQuestions
-- ----------------------------
DROP PROCEDURE IF EXISTS `InsertTestQuestions`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertTestQuestions`()
BEGIN DECLARE i INT DEFAULT 1;

WHILE i <= 100 DO
INSERT INTO
  `question` (
    `title`,
    `answer_count`,
    `is_published`,
    `is_star`,
    `is_deleted`
  )
VALUES
  (
    CONCAT('Question ', i),
    FLOOR(RAND() * 10),
    FLOOR(RAND() * 2),
    FLOOR(RAND() * 2),
    FLOOR(RAND() * 2)
  );

SET
  i = i + 1;

END
WHILE;

END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
