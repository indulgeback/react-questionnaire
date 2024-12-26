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

 Date: 20/12/2024 17:38:10
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
) ENGINE=InnoDB AUTO_INCREMENT=801 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of question
-- ----------------------------
BEGIN;
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (701, 'Question 1', 68, '2024-12-20 17:08:48.000000', 0, 'Description 723', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (702, 'Question 2', 45, '2024-12-20 17:08:48.000000', 1, 'Description 249', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (703, 'Question 3', 25, '2024-12-20 17:08:48.000000', 0, 'Description 384', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (704, 'Question 4', 30, '2024-12-20 17:08:48.000000', 1, 'Description 950', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (705, 'Question 5', 76, '2024-12-20 17:08:48.000000', 0, 'Description 574', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (706, 'Question 6', 99, '2024-12-20 17:08:48.000000', 0, 'Description 267', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (707, 'Question 7', 66, '2024-12-20 17:08:48.000000', 1, 'Description 830', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (708, 'Question 8', 38, '2024-12-20 17:08:48.000000', 0, 'Description 179', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (709, 'Question 9', 15, '2024-12-20 17:08:48.000000', 0, 'Description 877', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (710, 'Question 10', 94, '2024-12-20 17:08:48.000000', 1, 'Description 280', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (711, 'Question 11', 68, '2024-12-20 17:08:48.000000', 0, 'Description 681', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (712, 'Question 12', 37, '2024-12-20 17:08:48.000000', 0, 'Description 913', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (713, 'Question 13', 81, '2024-12-20 17:08:48.000000', 0, 'Description 658', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (714, 'Question 14', 57, '2024-12-20 17:08:48.000000', 1, 'Description 963', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (715, 'Question 15', 24, '2024-12-20 17:08:48.000000', 0, 'Description 247', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (716, 'Question 16', 9, '2024-12-20 17:08:48.000000', 0, 'Description 713', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (717, 'Question 17', 75, '2024-12-20 17:08:48.000000', 1, 'Description 345', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (718, 'Question 18', 61, '2024-12-20 17:08:48.000000', 1, 'Description 356', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (719, 'Question 19', 56, '2024-12-20 17:08:48.000000', 0, 'Description 105', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (720, 'Question 20', 54, '2024-12-20 17:08:48.000000', 0, 'Description 809', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (721, 'Question 21', 30, '2024-12-20 17:08:48.000000', 0, 'Description 839', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (722, 'Question 22', 1, '2024-12-20 17:08:48.000000', 0, 'Description 220', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (723, 'Question 23', 53, '2024-12-20 17:08:48.000000', 1, 'Description 944', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (724, 'Question 24', 38, '2024-12-20 17:08:48.000000', 0, 'Description 579', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (725, 'Question 25', 44, '2024-12-20 17:08:48.000000', 1, 'Description 805', '官方', '2024-12-20 17:08:48.000000', 18);
INSERT INTO `question` (`id`, `title`, `answer_count`, `create_time`, `is_published`, `description`, `author`, `update_time`, `author_id`) VALUES (726, 'Question 26', 18, '2024-12-20 17:08:48.000000', 1, 'Description 725', '官方', '2024-12-20 17:08:48.000000', 18);
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of user_favorites
-- ----------------------------
BEGIN;
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:37.325180', 20, 703, 23);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:39.434656', 20, 705, 24);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:40.315240', 20, 706, 25);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:41.083469', 20, 707, 26);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:42.734658', 20, 712, 27);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:43.516604', 20, 713, 28);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:45.053729', 20, 718, 29);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:46.366802', 20, 720, 30);
INSERT INTO `user_favorites` (`created_time`, `user_id`, `question_id`, `id`) VALUES ('2024-12-20 17:35:47.870697', 20, 722, 31);
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
