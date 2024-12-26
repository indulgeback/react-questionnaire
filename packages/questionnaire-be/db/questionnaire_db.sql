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

 Date: 26/12/2024 13:58:18
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
  `author_id` int NOT NULL DEFAULT '18',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=901 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question
-- ----------------------------
BEGIN;
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (702, 'Question 2', 45, '2024-12-20 17:08:48.000000', 1, 'Description 249', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (716, 'Question 16', 9, '2024-12-20 17:08:48.000000', 0, 'Description 713', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (717, 'Question 17', 75, '2024-12-20 17:08:48.000000', 1, 'Description 345', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (718, 'Question 18', 61, '2024-12-20 17:08:48.000000', 1, 'Description 356', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (719, 'Question 19', 56, '2024-12-20 17:08:48.000000', 0, 'Description 105', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (720, 'Question 20', 54, '2024-12-20 17:08:48.000000', 0, 'Description 809', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (721, 'Question 21', 30, '2024-12-20 17:08:48.000000', 0, 'Description 839', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (722, 'Question 22', 1, '2024-12-20 17:08:48.000000', 0, 'Description 220', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (723, 'Question 23', 53, '2024-12-20 17:08:48.000000', 1, 'Description 944', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (724, 'Question 24', 38, '2024-12-20 17:08:48.000000', 0, 'Description 579', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (727, 'Question 27', 86, '2024-12-20 17:08:48.000000', 1, 'Description 228', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (728, 'Question 28', 34, '2024-12-20 17:08:48.000000', 1, 'Description 661', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (729, 'Question 29', 8, '2024-12-20 17:08:48.000000', 0, 'Description 661', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (730, 'Question 30', 64, '2024-12-20 17:08:48.000000', 0, 'Description 2', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (731, 'Question 31', 55, '2024-12-20 17:08:48.000000', 0, 'Description 255', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (732, 'Question 32', 81, '2024-12-20 17:08:48.000000', 1, 'Description 366', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (733, 'Question 33', 8, '2024-12-20 17:08:48.000000', 0, 'Description 397', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (734, 'Question 34', 59, '2024-12-20 17:08:48.000000', 0, 'Description 851', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (735, 'Question 35', 35, '2024-12-20 17:08:48.000000', 1, 'Description 325', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (736, 'Question 36', 56, '2024-12-20 17:08:48.000000', 1, 'Description 3', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (737, 'Question 37', 62, '2024-12-20 17:08:48.000000', 1, 'Description 419', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (738, 'Question 38', 56, '2024-12-20 17:08:48.000000', 1, 'Description 429', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (739, 'Question 39', 44, '2024-12-20 17:08:48.000000', 0, 'Description 15', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (740, 'Question 40', 27, '2024-12-20 17:08:48.000000', 1, 'Description 562', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (741, 'Question 41', 78, '2024-12-20 17:08:48.000000', 0, 'Description 563', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (742, 'Question 42', 45, '2024-12-20 17:08:48.000000', 1, 'Description 834', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (743, 'Question 43', 98, '2024-12-20 17:08:48.000000', 1, 'Description 456', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (744, 'Question 44', 85, '2024-12-20 17:08:48.000000', 1, 'Description 918', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (745, 'Question 45', 95, '2024-12-20 17:08:48.000000', 0, 'Description 115', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (746, 'Question 46', 46, '2024-12-20 17:08:48.000000', 0, 'Description 362', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (747, 'Question 47', 39, '2024-12-20 17:08:48.000000', 0, 'Description 826', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (748, 'Question 48', 83, '2024-12-20 17:08:48.000000', 0, 'Description 260', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (749, 'Question 49', 15, '2024-12-20 17:08:48.000000', 0, 'Description 468', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (750, 'Question 50', 84, '2024-12-20 17:08:48.000000', 0, 'Description 392', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (751, 'Question 51', 46, '2024-12-20 17:08:48.000000', 0, 'Description 725', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (752, 'Question 52', 33, '2024-12-20 17:08:48.000000', 1, 'Description 358', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (753, 'Question 53', 44, '2024-12-20 17:08:48.000000', 0, 'Description 58', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (754, 'Question 54', 69, '2024-12-20 17:08:48.000000', 1, 'Description 978', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (755, 'Question 55', 71, '2024-12-20 17:08:48.000000', 1, 'Description 675', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (756, 'Question 56', 25, '2024-12-20 17:08:48.000000', 1, 'Description 579', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (757, 'Question 57', 47, '2024-12-20 17:08:48.000000', 0, 'Description 33', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (758, 'Question 58', 9, '2024-12-20 17:08:48.000000', 0, 'Description 989', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (759, 'Question 59', 55, '2024-12-20 17:08:48.000000', 0, 'Description 209', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (760, 'Question 60', 59, '2024-12-20 17:08:48.000000', 0, 'Description 999', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (761, 'Question 61', 5, '2024-12-20 17:08:48.000000', 1, 'Description 213', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (762, 'Question 62', 39, '2024-12-20 17:08:48.000000', 1, 'Description 68', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (763, 'Question 63', 7, '2024-12-20 17:08:48.000000', 0, 'Description 679', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (764, 'Question 64', 30, '2024-12-20 17:08:48.000000', 0, 'Description 464', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (765, 'Question 65', 39, '2024-12-20 17:08:48.000000', 1, 'Description 762', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (766, 'Question 66', 72, '2024-12-20 17:08:48.000000', 1, 'Description 375', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (767, 'Question 67', 42, '2024-12-20 17:08:48.000000', 1, 'Description 396', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (768, 'Question 68', 66, '2024-12-20 17:08:48.000000', 1, 'Description 508', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (769, 'Question 69', 39, '2024-12-20 17:08:48.000000', 0, 'Description 953', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (770, 'Question 70', 94, '2024-12-20 17:08:48.000000', 0, 'Description 469', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (771, 'Question 71', 78, '2024-12-20 17:08:48.000000', 1, 'Description 746', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (772, 'Question 72', 8, '2024-12-20 17:08:48.000000', 0, 'Description 22', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (773, 'Question 73', 66, '2024-12-20 17:08:48.000000', 1, 'Description 550', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (774, 'Question 74', 6, '2024-12-20 17:08:48.000000', 0, 'Description 425', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (775, 'Question 75', 29, '2024-12-20 17:08:48.000000', 0, 'Description 94', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (776, 'Question 76', 53, '2024-12-20 17:08:48.000000', 1, 'Description 15', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (777, 'Question 77', 23, '2024-12-20 17:08:48.000000', 0, 'Description 639', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (778, 'Question 78', 57, '2024-12-20 17:08:48.000000', 1, 'Description 683', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (779, 'Question 79', 47, '2024-12-20 17:08:48.000000', 0, 'Description 389', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (780, 'Question 80', 51, '2024-12-20 17:08:48.000000', 1, 'Description 630', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (781, 'Question 81', 26, '2024-12-20 17:08:48.000000', 1, 'Description 862', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (782, 'Question 82', 25, '2024-12-20 17:08:48.000000', 1, 'Description 894', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (783, 'Question 83', 47, '2024-12-20 17:08:48.000000', 1, 'Description 258', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (784, 'Question 84', 70, '2024-12-20 17:08:48.000000', 0, 'Description 490', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (785, 'Question 85', 85, '2024-12-20 17:08:48.000000', 1, 'Description 211', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (786, 'Question 86', 22, '2024-12-20 17:08:48.000000', 0, 'Description 629', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (787, 'Question 87', 9, '2024-12-20 17:08:48.000000', 1, 'Description 569', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (788, 'Question 88', 33, '2024-12-20 17:08:48.000000', 0, 'Description 523', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (789, 'Question 89', 4, '2024-12-20 17:08:48.000000', 1, 'Description 465', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (790, 'Question 90', 79, '2024-12-20 17:08:48.000000', 1, 'Description 65', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (791, 'Question 91', 68, '2024-12-20 17:08:48.000000', 1, 'Description 619', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (792, 'Question 92', 92, '2024-12-20 17:08:48.000000', 0, 'Description 716', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (793, 'Question 93', 34, '2024-12-20 17:08:48.000000', 0, 'Description 546', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (794, 'Question 94', 43, '2024-12-20 17:08:48.000000', 0, 'Description 329', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (795, 'Question 95', 36, '2024-12-20 17:08:48.000000', 0, 'Description 579', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (796, 'Question 96', 80, '2024-12-20 17:08:48.000000', 1, 'Description 426', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (797, 'Question 97', 77, '2024-12-20 17:08:48.000000', 1, 'Description 417', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (798, 'Question 98', 41, '2024-12-20 17:08:48.000000', 0, 'Description 868', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (799, 'Question 99', 25, '2024-12-20 17:08:48.000000', 1, 'Description 137', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (800, 'Question 100', 9, '2024-12-20 17:08:48.000000', 1, 'Description 536', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (801, 'Question 1', 98, '2024-12-25 16:37:18.000000', 0, 'Description 899', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (802, 'Question 2', 2, '2024-12-25 16:37:18.000000', 1, 'Description 136', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (803, 'Question 3', 51, '2024-12-25 16:37:18.000000', 1, 'Description 536', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (804, 'Question 4', 17, '2024-12-25 16:37:18.000000', 0, 'Description 204', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (805, 'Question 5', 29, '2024-12-25 16:37:18.000000', 1, 'Description 821', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (806, 'Question 6', 54, '2024-12-25 16:37:18.000000', 0, 'Description 106', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (807, 'Question 7', 50, '2024-12-25 16:37:18.000000', 1, 'Description 338', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (808, 'Question 8', 7, '2024-12-25 16:37:18.000000', 1, 'Description 135', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (809, 'Question 9', 37, '2024-12-25 16:37:18.000000', 1, 'Description 663', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (810, 'Question 10', 14, '2024-12-25 16:37:18.000000', 1, 'Description 370', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (811, 'Question 11', 57, '2024-12-25 16:37:18.000000', 1, 'Description 692', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (812, 'Question 12', 18, '2024-12-25 16:37:18.000000', 1, 'Description 325', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (813, 'Question 13', 56, '2024-12-25 16:37:18.000000', 1, 'Description 297', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (814, 'Question 14', 82, '2024-12-25 16:37:18.000000', 0, 'Description 919', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (815, 'Question 15', 17, '2024-12-25 16:37:18.000000', 0, 'Description 471', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (816, 'Question 16', 88, '2024-12-25 16:37:18.000000', 1, 'Description 866', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (817, 'Question 17', 28, '2024-12-25 16:37:18.000000', 1, 'Description 566', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (818, 'Question 18', 93, '2024-12-25 16:37:18.000000', 0, 'Description 831', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (819, 'Question 19', 41, '2024-12-25 16:37:18.000000', 0, 'Description 207', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (820, 'Question 20', 13, '2024-12-25 16:37:18.000000', 0, 'Description 111', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (821, 'Question 21', 30, '2024-12-25 16:37:18.000000', 1, 'Description 260', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (822, 'Question 22', 54, '2024-12-25 16:37:18.000000', 0, 'Description 747', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (823, 'Question 23', 16, '2024-12-25 16:37:18.000000', 1, 'Description 713', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (824, 'Question 24', 23, '2024-12-25 16:37:18.000000', 1, 'Description 847', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (825, 'Question 25', 53, '2024-12-25 16:37:18.000000', 0, 'Description 492', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (826, 'Question 26', 75, '2024-12-25 16:37:18.000000', 0, 'Description 484', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (827, 'Question 27', 89, '2024-12-25 16:37:18.000000', 0, 'Description 377', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (828, 'Question 28', 26, '2024-12-25 16:37:18.000000', 0, 'Description 64', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (829, 'Question 29', 2, '2024-12-25 16:37:18.000000', 0, 'Description 888', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (830, 'Question 30', 19, '2024-12-25 16:37:18.000000', 1, 'Description 329', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (831, 'Question 31', 50, '2024-12-25 16:37:18.000000', 1, 'Description 285', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (832, 'Question 32', 37, '2024-12-25 16:37:18.000000', 0, 'Description 885', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (833, 'Question 33', 58, '2024-12-25 16:37:18.000000', 1, 'Description 60', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (834, 'Question 34', 34, '2024-12-25 16:37:18.000000', 1, 'Description 907', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (835, 'Question 35', 72, '2024-12-25 16:37:18.000000', 1, 'Description 941', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (836, 'Question 36', 50, '2024-12-25 16:37:18.000000', 0, 'Description 775', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (837, 'Question 37', 24, '2024-12-25 16:37:18.000000', 0, 'Description 582', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (838, 'Question 38', 71, '2024-12-25 16:37:18.000000', 1, 'Description 626', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (839, 'Question 39', 46, '2024-12-25 16:37:18.000000', 0, 'Description 308', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (840, 'Question 40', 22, '2024-12-25 16:37:18.000000', 0, 'Description 698', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (841, 'Question 41', 50, '2024-12-25 16:37:18.000000', 1, 'Description 526', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (842, 'Question 42', 0, '2024-12-25 16:37:18.000000', 1, 'Description 162', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (843, 'Question 43', 12, '2024-12-25 16:37:18.000000', 0, 'Description 759', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (844, 'Question 44', 58, '2024-12-25 16:37:18.000000', 1, 'Description 321', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (845, 'Question 45', 81, '2024-12-25 16:37:18.000000', 1, 'Description 154', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (846, 'Question 46', 22, '2024-12-25 16:37:18.000000', 0, 'Description 612', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (847, 'Question 47', 2, '2024-12-25 16:37:18.000000', 1, 'Description 780', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (848, 'Question 48', 85, '2024-12-25 16:37:18.000000', 1, 'Description 842', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (849, 'Question 49', 90, '2024-12-25 16:37:18.000000', 1, 'Description 239', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (850, 'Question 50', 52, '2024-12-25 16:37:18.000000', 0, 'Description 401', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (851, 'Question 51', 60, '2024-12-25 16:37:18.000000', 0, 'Description 580', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (852, 'Question 52', 82, '2024-12-25 16:37:18.000000', 1, 'Description 525', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (853, 'Question 53', 94, '2024-12-25 16:37:18.000000', 1, 'Description 326', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (854, 'Question 54', 6, '2024-12-25 16:37:18.000000', 1, 'Description 855', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (855, 'Question 55', 53, '2024-12-25 16:37:18.000000', 1, 'Description 556', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (856, 'Question 56', 99, '2024-12-25 16:37:18.000000', 1, 'Description 400', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (857, 'Question 57', 34, '2024-12-25 16:37:18.000000', 1, 'Description 941', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (858, 'Question 58', 65, '2024-12-25 16:37:18.000000', 1, 'Description 472', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (859, 'Question 59', 16, '2024-12-25 16:37:18.000000', 1, 'Description 352', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (860, 'Question 60', 64, '2024-12-25 16:37:18.000000', 0, 'Description 398', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (861, 'Question 61', 45, '2024-12-25 16:37:18.000000', 0, 'Description 325', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (862, 'Question 62', 23, '2024-12-25 16:37:18.000000', 0, 'Description 243', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (863, 'Question 63', 64, '2024-12-25 16:37:18.000000', 0, 'Description 608', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (864, 'Question 64', 18, '2024-12-25 16:37:18.000000', 1, 'Description 78', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (865, 'Question 65', 0, '2024-12-25 16:37:18.000000', 1, 'Description 802', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (866, 'Question 66', 38, '2024-12-25 16:37:18.000000', 1, 'Description 45', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (867, 'Question 67', 98, '2024-12-25 16:37:18.000000', 0, 'Description 883', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (868, 'Question 68', 39, '2024-12-25 16:37:18.000000', 1, 'Description 449', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (869, 'Question 69', 24, '2024-12-25 16:37:18.000000', 0, 'Description 37', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (870, 'Question 70', 89, '2024-12-25 16:37:18.000000', 1, 'Description 850', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (871, 'Question 71', 0, '2024-12-25 16:37:18.000000', 0, 'Description 959', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (872, 'Question 72', 15, '2024-12-25 16:37:18.000000', 1, 'Description 719', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (873, 'Question 73', 11, '2024-12-25 16:37:18.000000', 1, 'Description 590', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (874, 'Question 74', 34, '2024-12-25 16:37:18.000000', 0, 'Description 764', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (875, 'Question 75', 35, '2024-12-25 16:37:18.000000', 0, 'Description 131', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (876, 'Question 76', 17, '2024-12-25 16:37:18.000000', 0, 'Description 869', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (877, 'Question 77', 69, '2024-12-25 16:37:18.000000', 1, 'Description 912', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (878, 'Question 78', 43, '2024-12-25 16:37:18.000000', 1, 'Description 517', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (879, 'Question 79', 84, '2024-12-25 16:37:18.000000', 0, 'Description 733', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (880, 'Question 80', 19, '2024-12-25 16:37:18.000000', 1, 'Description 664', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (881, 'Question 81', 38, '2024-12-25 16:37:18.000000', 0, 'Description 258', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (882, 'Question 82', 88, '2024-12-25 16:37:18.000000', 0, 'Description 679', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (883, 'Question 83', 42, '2024-12-25 16:37:18.000000', 0, 'Description 323', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (884, 'Question 84', 89, '2024-12-25 16:37:18.000000', 0, 'Description 468', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (885, 'Question 85', 32, '2024-12-25 16:37:18.000000', 0, 'Description 714', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (886, 'Question 86', 84, '2024-12-25 16:37:18.000000', 1, 'Description 463', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (887, 'Question 87', 5, '2024-12-25 16:37:18.000000', 0, 'Description 723', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (888, 'Question 88', 34, '2024-12-25 16:37:18.000000', 1, 'Description 327', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (889, 'Question 89', 77, '2024-12-25 16:37:18.000000', 0, 'Description 589', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (890, 'Question 90', 3, '2024-12-25 16:37:18.000000', 0, 'Description 282', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (891, 'Question 91', 3, '2024-12-25 16:37:18.000000', 0, 'Description 615', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (892, 'Question 92', 84, '2024-12-25 16:37:18.000000', 0, 'Description 570', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (893, 'Question 93', 26, '2024-12-25 16:37:18.000000', 0, 'Description 950', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (894, 'Question 94', 56, '2024-12-25 16:37:18.000000', 0, 'Description 602', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (895, 'Question 95', 38, '2024-12-25 16:37:18.000000', 0, 'Description 502', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (896, 'Question 96', 3, '2024-12-25 16:37:18.000000', 1, 'Description 846', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (897, 'Question 97', 62, '2024-12-25 16:37:18.000000', 1, 'Description 113', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (898, 'Question 98', 33, '2024-12-25 16:37:18.000000', 0, 'Description 152', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (899, 'Question 99', 76, '2024-12-25 16:37:18.000000', 1, 'Description 83', '官方', '2024-12-25 16:37:18.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (900, 'Question 100', 86, '2024-12-25 16:37:18.000000', 1, 'Description 509', '官方', '2024-12-25 16:37:18.000000', 18);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `password`, `nickname`, `email`, `create_time`, `avatar`, `bio`) VALUES (18, '$2b$10$MyOIBSoPm2pIKY3F75qseOppF5ZcIRtfXBCg8xz5pKI1IxOl7d/4K', 'IndulgeBack', 'liuwenyu1937@outlook.com', '2024-11-21 15:59:53.228394', NULL, NULL);
INSERT INTO `user` (`id`, `password`, `nickname`, `email`, `create_time`, `avatar`, `bio`) VALUES (20, '$2a$10$psAH3fCtGdPCA8wlLaq0g..9zkuKhOnFYwL2zhPxN14nrE3c1x.9i', 'liuwy', '1980956571@qq.com', '2024-12-20 17:11:24.437134', NULL, NULL);
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_favorites
-- ----------------------------
BEGIN;
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:45.053729', 20, 718, 29);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:46.366802', 20, 720, 30);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:47.870697', 20, 722, 31);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:22:43.478580', 20, 716, 35);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:22:44.212608', 20, 717, 36);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:22:49.024311', 20, 719, 37);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:43:28.760978', 18, 716, 48);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:43:41.180024', 18, 718, 50);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:43:46.957590', 18, 719, 51);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:43:48.973778', 18, 720, 52);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 15:43:59.728980', 18, 731, 53);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-25 16:21:46.941702', 18, 702, 55);
COMMIT;

-- ----------------------------
-- Procedure structure for InsertTestQuestions
-- ----------------------------
DROP PROCEDURE IF EXISTS `InsertTestQuestions`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `InsertTestQuestions`()
BEGIN
  DECLARE i INT DEFAULT 1;

  WHILE i <= 100 DO
    INSERT INTO `question` (
      `title`,
      `description`,
      `author_id`,
      `author`,
      `answer_count`,
      `create_time`,
      `update_time`,
      `is_published`
    )
    VALUES (
      CONCAT('Question ', i), -- 随机标题
      CONCAT('Description ', FLOOR(1 + RAND() * 1000)), -- 随机描述
      18, -- 作者ID固定为18
      '官方', -- 作者固定为官方
      FLOOR(RAND() * 100), -- 随机填写次数
      NOW(), -- 当前时间作为创建时间
      NOW(), -- 当前时间作为更新时间
      FLOOR(RAND() * 2) -- 随机布尔值
    );

    SET i = i + 1;
  END WHILE;

END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
