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

 Date: 08/11/2024 15:46:26
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
  `description` varchar(255) NOT NULL DEFAULT '暂无描述',
  `author` varchar(255) NOT NULL DEFAULT '官方',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question
-- ----------------------------
BEGIN;
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 1', 201, 4, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 2', 202, 5, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 3', 203, 4, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 4', 204, 8, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 5', 205, 9, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 6', 206, 4, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 7', 207, 4, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 8', 208, 9, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 9', 209, 7, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 10', 210, 7, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 11', 211, 9, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 12', 212, 7, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 13', 213, 3, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 14', 214, 0, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 15', 215, 1, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 16', 216, 8, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 17', 217, 7, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 18', 218, 3, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 19', 219, 7, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 20', 220, 7, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 21', 221, 2, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 22', 222, 1, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 23', 223, 1, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 24', 224, 4, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 25', 225, 7, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 26', 226, 0, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 27', 227, 4, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 28', 228, 6, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 29', 229, 4, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 30', 230, 7, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 31', 231, 2, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 32', 232, 1, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 33', 233, 1, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 34', 234, 8, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 35', 235, 0, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 36', 236, 9, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 37', 237, 3, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 38', 238, 6, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 39', 239, 1, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 40', 240, 8, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 41', 241, 2, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 42', 242, 7, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 43', 243, 5, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 44', 244, 3, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 45', 245, 9, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 46', 246, 2, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 47', 247, 5, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 48', 248, 0, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 49', 249, 3, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 50', 250, 3, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 51', 251, 4, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 52', 252, 7, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 53', 253, 7, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 54', 254, 3, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 55', 255, 4, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 56', 256, 8, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 57', 257, 9, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 58', 258, 8, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 59', 259, 2, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 60', 260, 9, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 61', 261, 1, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 62', 262, 5, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 63', 263, 6, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 64', 264, 4, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 65', 265, 1, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 66', 266, 4, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 67', 267, 5, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 68', 268, 3, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 69', 269, 4, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 70', 270, 1, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 71', 271, 2, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 72', 272, 6, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 73', 273, 1, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 74', 274, 0, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 75', 275, 0, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 76', 276, 1, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 77', 277, 5, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 78', 278, 5, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 79', 279, 7, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 80', 280, 9, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 81', 281, 4, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 82', 282, 5, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 83', 283, 4, '2024-11-08 15:43:14', 0, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 84', 284, 1, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 85', 285, 8, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 86', 286, 0, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 87', 287, 3, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 88', 288, 5, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 89', 289, 0, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 90', 290, 2, '2024-11-08 15:43:14', 0, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 91', 291, 9, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 92', 292, 2, '2024-11-08 15:43:14', 1, 0, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 93', 293, 0, '2024-11-08 15:43:14', 1, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 94', 294, 8, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 95', 295, 5, '2024-11-08 15:43:14', 1, 1, 1, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 96', 296, 6, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 97', 297, 1, '2024-11-08 15:43:14', 1, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 98', 298, 9, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 99', 299, 8, '2024-11-08 15:43:14', 0, 0, 0, '暂无描述', '官方');
INSERT INTO `question` (`title`, `id`, `answer_count`, `create_time`, `is_published`, `is_star`, `is_deleted`, `description`, `author`) VALUES ('Question 100', 300, 4, '2024-11-08 15:43:14', 0, 1, 0, '暂无描述', '官方');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `password`, `nickname`, `email`) VALUES (18, '$2b$10$MyOIBSoPm2pIKY3F75qseOppF5ZcIRtfXBCg8xz5pKI1IxOl7d/4K', 'IndulgeBack', 'liuwenyu1937@outlook.com');
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
