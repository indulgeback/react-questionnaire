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

 Date: 28/11/2024 17:07:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `answer_count` int NOT NULL,
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `is_published` tinyint NOT NULL DEFAULT '0',
  `description` varchar(255) NOT NULL DEFAULT '暂无描述',
  `author` varchar(255) NOT NULL DEFAULT '官方',
  `update_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question
-- ----------------------------
BEGIN;
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (201, 'Question 1', 422, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (202, 'Question 2', 566, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (203, 'Question 3', 434234, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (204, 'Question 4', 8432432, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (205, 'Question 5', 923432, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (206, 'Question 6', 42432, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (207, 'Question 7', 4433, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (208, 'Question 8', 92343, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (209, 'Question 9', 73424, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (210, 'Question 10', 7234234, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (212, 'Question 12', 7423432, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (213, 'Question 13', 33423, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (214, 'Question 14', 432, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (215, 'Question 15', 1234, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (216, 'Question 16', 8, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (217, 'Question 17', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (218, 'Question 18', 3, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (219, 'Question 19', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (220, 'Question 20', 7, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (221, 'Question 21', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (222, 'Question 22', 1, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (223, 'Question 23', 1, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (224, 'Question 24', 4, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (225, 'Question 25', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (226, 'Question 26', 0, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (227, 'Question 27', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (228, 'Question 28', 6, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (229, 'Question 29', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (230, 'Question 30', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (231, 'Question 31', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (232, 'Question 32', 1, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (233, 'Question 33', 1, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (234, 'Question 34', 8, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (235, 'Question 35', 0, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (236, 'Question 36', 9, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (237, 'Question 37', 3, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (238, 'Question 38', 6, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (239, 'Question 39', 1, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (240, 'Question 40', 8, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (241, 'Question 41', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (242, 'Question 42', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (243, 'Question 43', 5, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (244, 'Question 44', 3, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (245, 'Question 45', 9, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (246, 'Question 46', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (247, 'Question 47', 5, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (248, 'Question 48', 0, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (249, 'Question 49', 3, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (250, 'Question 50', 3, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (251, 'Question 51', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (252, 'Question 52', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (253, 'Question 53', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (254, 'Question 54', 3, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (255, 'Question 55', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (256, 'Question 56', 8, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (257, 'Question 57', 9, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (258, 'Question 58', 8, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (259, 'Question 59', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (260, 'Question 60', 9, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (261, 'Question 61', 1, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (262, 'Question 62', 5, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (263, 'Question 63', 6, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (264, 'Question 64', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (265, 'Question 65', 1, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (266, 'Question 66', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (267, 'Question 67', 5, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (268, 'Question 68', 3, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (269, 'Question 69', 4, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (270, 'Question 70', 1, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (271, 'Question 71', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (272, 'Question 72', 6, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (273, 'Question 73', 1, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (274, 'Question 74', 0, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (275, 'Question 75', 0, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (276, 'Question 76', 1, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (277, 'Question 77', 5, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (278, 'Question 78', 5, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (279, 'Question 79', 7, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (280, 'Question 80', 9, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (281, 'Question 81', 4, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (282, 'Question 82', 5, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (283, 'Question 83', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (284, 'Question 84', 1, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (285, 'Question 85', 8, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (286, 'Question 86', 0, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (287, 'Question 87', 3, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (288, 'Question 88', 5, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (289, 'Question 89', 0, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (290, 'Question 90', 2, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (291, 'Question 91', 9, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (292, 'Question 92', 2, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (293, 'Question 93', 0, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (294, 'Question 94', 8, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (295, 'Question 95', 5, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (296, 'Question 96', 6, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (297, 'Question 97', 1, '2024-11-08 15:43:14.000000', 1, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (298, 'Question 98', 9, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (299, 'Question 99', 8, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`) VALUES (300, 'Question 100', 4, '2024-11-08 15:43:14.000000', 0, '暂无描述', '官方', '2024-11-21 15:44:06.106178');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `avatar` varchar(255) DEFAULT NULL,
  `bio` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `password`, `nickname`, `email`, `create_time`, `avatar`, `bio`) VALUES (18, '$2b$10$MyOIBSoPm2pIKY3F75qseOppF5ZcIRtfXBCg8xz5pKI1IxOl7d/4K', 'IndulgeBack', 'liuwenyu1937@outlook.com', '2024-11-21 15:59:53.228394', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for user_favorites
-- ----------------------------
DROP TABLE IF EXISTS `user_favorites`;
CREATE TABLE `user_favorites` (
  `created_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `user_id` int NOT NULL,
  `question_id` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `FK_5238ce0a21cc77dc16c8efe3d36` (`user_id`),
  KEY `FK_09c7eaa2ae773062f54d1749a8f` (`question_id`),
  CONSTRAINT `FK_09c7eaa2ae773062f54d1749a8f` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`),
  CONSTRAINT `FK_5238ce0a21cc77dc16c8efe3d36` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_favorites
-- ----------------------------
BEGIN;
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-11-25 11:31:54.856008', 18, 244, 17);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-11-25 11:31:59.334294', 18, 245, 18);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-11-25 11:32:03.763178', 18, 299, 19);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-11-25 11:32:08.520144', 18, 223, 20);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-11-25 11:32:12.891288', 18, 254, 21);
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
