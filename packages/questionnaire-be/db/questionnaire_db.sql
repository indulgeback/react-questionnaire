/*
 Navicat Premium Dump SQL

 Source Server         : 阿里云服务器生产环境
 Source Server Type    : MySQL
 Source Server Version : 80041 (8.0.41)
 Source Host           : 8.152.205.176:3307
 Source Schema         : questionnaire_db

 Target Server Type    : MySQL
 Target Server Version : 80041 (8.0.41)
 File Encoding         : 65001

 Date: 23/02/2025 21:16:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for question
-- ----------------------------
DROP TABLE IF EXISTS `question`;
CREATE TABLE `question`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `answer_count` int NOT NULL,
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `is_published` tinyint NOT NULL DEFAULT 0,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '暂无描述',
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '官方',
  `update_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `author_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 401 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of question
-- ----------------------------
INSERT INTO `question` VALUES (302, 'Question 2', 46, '2024-12-26 10:54:02.000000', 0, 'Description 980', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (303, 'Question 3', 43, '2024-12-26 10:54:02.000000', 1, 'Description 517', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (304, 'Question 4', 54, '2024-12-26 10:54:02.000000', 0, 'Description 895', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (305, 'Question 5', 73, '2024-12-26 10:54:02.000000', 1, 'Description 572', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (306, 'Question 6', 86, '2024-12-26 10:54:02.000000', 1, 'Description 542', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (307, 'Question 7', 28, '2024-12-26 10:54:02.000000', 1, 'Description 874', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (308, 'Question 8', 80, '2024-12-26 10:54:02.000000', 0, 'Description 255', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (309, 'Question 9', 24, '2024-12-26 10:54:02.000000', 1, 'Description 793', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (310, 'Question 10', 5, '2024-12-26 10:54:02.000000', 1, 'Description 522', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (312, 'Question 12', 65, '2024-12-26 10:54:02.000000', 0, 'Description 354', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (313, 'Question 13', 51, '2024-12-26 10:54:02.000000', 1, 'Description 19', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (314, 'Question 14', 35, '2024-12-26 10:54:02.000000', 1, 'Description 972', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (315, 'Question 15', 64, '2024-12-26 10:54:02.000000', 0, 'Description 247', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (316, 'Question 16', 88, '2024-12-26 10:54:02.000000', 0, 'Description 466', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (317, 'Question 17', 74, '2024-12-26 10:54:02.000000', 1, 'Description 578', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (318, 'Question 18', 23, '2024-12-26 10:54:02.000000', 0, 'Description 629', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (319, 'Question 19', 62, '2024-12-26 10:54:02.000000', 0, 'Description 693', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (320, 'Question 20', 97, '2024-12-26 10:54:02.000000', 1, 'Description 434', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (321, 'Question 21', 12, '2024-12-26 10:54:02.000000', 1, 'Description 973', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (322, 'Question 22', 36, '2024-12-26 10:54:02.000000', 1, 'Description 88', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (323, 'Question 23', 6, '2024-12-26 10:54:02.000000', 0, 'Description 757', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (324, 'Question 24', 62, '2024-12-26 10:54:02.000000', 1, 'Description 170', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (325, 'Question 25', 98, '2024-12-26 10:54:02.000000', 0, 'Description 162', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (326, 'Question 26', 23, '2024-12-26 10:54:02.000000', 0, 'Description 321', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (327, 'Question 27', 95, '2024-12-26 10:54:02.000000', 1, 'Description 313', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (328, 'Question 28', 27, '2024-12-26 10:54:02.000000', 0, 'Description 364', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (329, 'Question 29', 38, '2024-12-26 10:54:02.000000', 1, 'Description 656', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (330, 'Question 30', 29, '2024-12-26 10:54:02.000000', 1, 'Description 633', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (331, 'Question 31', 97, '2024-12-26 10:54:02.000000', 0, 'Description 933', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (332, 'Question 32', 12, '2024-12-26 10:54:02.000000', 0, 'Description 474', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (333, 'Question 33', 87, '2024-12-26 10:54:02.000000', 0, 'Description 706', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (334, 'Question 34', 58, '2024-12-26 10:54:02.000000', 1, 'Description 674', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (335, 'Question 35', 54, '2024-12-26 10:54:02.000000', 0, 'Description 865', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (336, 'Question 36', 31, '2024-12-26 10:54:02.000000', 1, 'Description 930', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (337, 'Question 37', 78, '2024-12-26 10:54:02.000000', 1, 'Description 36', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (338, 'Question 38', 8, '2024-12-26 10:54:02.000000', 0, 'Description 703', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (339, 'Question 39', 28, '2024-12-26 10:54:02.000000', 1, 'Description 235', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (340, 'Question 40', 76, '2024-12-26 10:54:02.000000', 0, 'Description 791', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (341, 'Question 41', 37, '2024-12-26 10:54:02.000000', 0, 'Description 943', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (342, 'Question 42', 11, '2024-12-26 10:54:02.000000', 0, 'Description 41', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (343, 'Question 43', 77, '2024-12-26 10:54:02.000000', 0, 'Description 813', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (344, 'Question 44', 17, '2024-12-26 10:54:02.000000', 0, 'Description 903', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (345, 'Question 45', 75, '2024-12-26 10:54:02.000000', 0, 'Description 243', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (346, 'Question 46', 2, '2024-12-26 10:54:02.000000', 1, 'Description 43', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (347, 'Question 47', 29, '2024-12-26 10:54:02.000000', 1, 'Description 849', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (348, 'Question 48', 76, '2024-12-26 10:54:02.000000', 1, 'Description 704', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (349, 'Question 49', 65, '2024-12-26 10:54:02.000000', 0, 'Description 374', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (350, 'Question 50', 2, '2024-12-26 10:54:02.000000', 0, 'Description 913', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (351, 'Question 51', 32, '2024-12-26 10:54:02.000000', 1, 'Description 903', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (352, 'Question 52', 10, '2024-12-26 10:54:02.000000', 1, 'Description 566', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (353, 'Question 53', 81, '2024-12-26 10:54:02.000000', 0, 'Description 865', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (354, 'Question 54', 8, '2024-12-26 10:54:02.000000', 1, 'Description 898', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (355, 'Question 55', 10, '2024-12-26 10:54:02.000000', 0, 'Description 469', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (356, 'Question 56', 87, '2024-12-26 10:54:02.000000', 1, 'Description 242', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (357, 'Question 57', 24, '2024-12-26 10:54:02.000000', 0, 'Description 642', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (358, 'Question 58', 7, '2024-12-26 10:54:02.000000', 1, 'Description 801', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (359, 'Question 59', 56, '2024-12-26 10:54:02.000000', 1, 'Description 705', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (360, 'Question 60', 85, '2024-12-26 10:54:02.000000', 1, 'Description 788', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (361, 'Question 61', 25, '2024-12-26 10:54:02.000000', 0, 'Description 999', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (362, 'Question 62', 29, '2024-12-26 10:54:02.000000', 1, 'Description 627', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (363, 'Question 63', 92, '2024-12-26 10:54:02.000000', 0, 'Description 152', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (364, 'Question 64', 26, '2024-12-26 10:54:02.000000', 1, 'Description 167', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (365, 'Question 65', 89, '2024-12-26 10:54:02.000000', 1, 'Description 265', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (366, 'Question 66', 17, '2024-12-26 10:54:02.000000', 1, 'Description 632', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (367, 'Question 67', 5, '2024-12-26 10:54:02.000000', 0, 'Description 404', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (368, 'Question 68', 85, '2024-12-26 10:54:02.000000', 1, 'Description 217', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (369, 'Question 69', 45, '2024-12-26 10:54:02.000000', 1, 'Description 452', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (370, 'Question 70', 61, '2024-12-26 10:54:02.000000', 0, 'Description 282', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (371, 'Question 71', 94, '2024-12-26 10:54:02.000000', 1, 'Description 330', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (372, 'Question 72', 81, '2024-12-26 10:54:02.000000', 1, 'Description 798', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (373, 'Question 73', 41, '2024-12-26 10:54:02.000000', 0, 'Description 880', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (374, 'Question 74', 93, '2024-12-26 10:54:02.000000', 0, 'Description 835', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (375, 'Question 75', 52, '2024-12-26 10:54:02.000000', 1, 'Description 2', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (376, 'Question 76', 16, '2024-12-26 10:54:02.000000', 1, 'Description 618', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (377, 'Question 77', 83, '2024-12-26 10:54:02.000000', 0, 'Description 347', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (378, 'Question 78', 99, '2024-12-26 10:54:02.000000', 1, 'Description 67', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (379, 'Question 79', 44, '2024-12-26 10:54:02.000000', 0, 'Description 965', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (380, 'Question 80', 71, '2024-12-26 10:54:02.000000', 1, 'Description 346', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (381, 'Question 81', 34, '2024-12-26 10:54:02.000000', 1, 'Description 601', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (382, 'Question 82', 54, '2024-12-26 10:54:02.000000', 1, 'Description 676', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (383, 'Question 83', 11, '2024-12-26 10:54:02.000000', 0, 'Description 841', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (384, 'Question 84', 69, '2024-12-26 10:54:02.000000', 1, 'Description 979', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (385, 'Question 85', 22, '2024-12-26 10:54:02.000000', 0, 'Description 563', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (386, 'Question 86', 47, '2024-12-26 10:54:02.000000', 1, 'Description 566', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (387, 'Question 87', 17, '2024-12-26 10:54:02.000000', 1, 'Description 55', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (388, 'Question 88', 45, '2024-12-26 10:54:02.000000', 1, 'Description 131', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (389, 'Question 89', 27, '2024-12-26 10:54:02.000000', 0, 'Description 975', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (390, 'Question 90', 71, '2024-12-26 10:54:02.000000', 0, 'Description 411', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (391, 'Question 91', 80, '2024-12-26 10:54:02.000000', 0, 'Description 568', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (392, 'Question 92', 35, '2024-12-26 10:54:02.000000', 1, 'Description 276', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (393, 'Question 93', 83, '2024-12-26 10:54:02.000000', 1, 'Description 747', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (394, 'Question 94', 52, '2024-12-26 10:54:02.000000', 1, 'Description 281', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (395, 'Question 95', 6, '2024-12-26 10:54:02.000000', 1, 'Description 274', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (396, 'Question 96', 4, '2024-12-26 10:54:02.000000', 0, 'Description 311', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (397, 'Question 97', 20, '2024-12-26 10:54:02.000000', 1, 'Description 430', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (398, 'Question 98', 84, '2024-12-26 10:54:02.000000', 0, 'Description 1', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (399, 'Question 99', 77, '2024-12-26 10:54:02.000000', 0, 'Description 475', '官方', '2024-12-26 10:54:02.000000', 18);
INSERT INTO `question` VALUES (400, 'Question 100', 41, '2024-12-26 10:54:02.000000', 0, 'Description 958', '官方', '2024-12-26 10:54:02.000000', 18);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `bio` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2`(`email` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (18, '$2b$10$MyOIBSoPm2pIKY3F75qseOppF5ZcIRtfXBCg8xz5pKI1IxOl7d/4K', 'IndulgeBack', 'liuwenyu1937@outlook.com', '2024-11-21 15:59:53.228394', NULL, NULL);
INSERT INTO `user` VALUES (20, '$2a$10$a8cs6UFISWysYkT09InUC.t0xtVxIzEMlsCYPsog3tNePMhuzxeti', '何处走天涯', '1306096080@qq.com', '2024-11-29 23:03:04.841251', NULL, NULL);
INSERT INTO `user` VALUES (21, '$2a$10$qI4D4Q/EgQRgalCF0FyVT.CWZqGrkqEc9xRKAVQv8kTZzo/I8/2Zq', 'jhy', '3027872240@qq.com', '2024-11-30 17:55:43.750231', NULL, NULL);
INSERT INTO `user` VALUES (22, '$2a$10$lXqT.FfjYs9Zi9LcNEVX8e1U/3VmWTpzLve0QUoaDkEegf94rId.e', 'Cancan', '1587880675@qq.com', '2024-12-16 19:12:21.568979', NULL, NULL);
INSERT INTO `user` VALUES (23, '$2a$10$ahQKH5YBMzrkB9dHRjmi1urNV3/YqN5ujvj0hU5LWJtMm2DTEy9bK', '测试注册', '1980956571@qq.com', '2024-12-16 19:12:32.060022', NULL, NULL);
INSERT INTO `user` VALUES (24, '$2a$10$N6T/abEx4ZDFZKKPtQ/86O4X5327YlqqU75PycQ9resQAR/TfHcya', 'sws323', 'sws323@126.com', '2024-12-26 10:07:30.285438', NULL, NULL);
INSERT INTO `user` VALUES (25, '$2a$10$Ns/HBQOAVVIXe6hVzLc8JuId0hqs4r7mtT7TgemkHKv3etSuHEM/u', 'HanGK', '2663968138@qq.com', '2024-12-30 16:24:06.331761', NULL, NULL);
INSERT INTO `user` VALUES (26, '$2a$10$bdNrZxxaGNLLVOz1sY/YEuoZG2S.dgwEt8kGnRwl5VJTRVxBNlSVW', 'allen', 'vuffug@gvwdc.com', '2024-12-31 19:31:51.413428', NULL, NULL);
INSERT INTO `user` VALUES (27, '$2a$10$Z0mr7zDp9KJPsLpdKcpwNO2a0j9iuld1tucAa0O.Z.JwEcNHmGiou', 'qinmo', 'hebkiv@fpccd.com', '2025-02-04 10:03:20.755524', NULL, NULL);
INSERT INTO `user` VALUES (28, '$2a$10$SqkL.c1lPvyw0/WTBgQerOrxc52nBQ1jeIefepxPLWvJzxIc4rgGy', 'aaa22211', '3267807514@qq.com', '2025-02-19 22:28:02.217181', NULL, NULL);

-- ----------------------------
-- Table structure for user_favorites
-- ----------------------------
DROP TABLE IF EXISTS `user_favorites`;
CREATE TABLE `user_favorites`  (
  `created_time` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `user_id` int NOT NULL,
  `question_id` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `FK_5238ce0a21cc77dc16c8efe3d36`(`user_id` ASC) USING BTREE,
  INDEX `FK_09c7eaa2ae773062f54d1749a8f`(`question_id` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 29 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_favorites
-- ----------------------------
INSERT INTO `user_favorites` VALUES ('2024-12-27 14:09:25.369222', 18, 312, 24);
INSERT INTO `user_favorites` VALUES ('2024-12-27 14:09:26.147146', 18, 313, 25);
INSERT INTO `user_favorites` VALUES ('2024-12-28 23:47:28.149327', 18, 319, 27);

-- ----------------------------
-- Procedure structure for InsertTestQuestions
-- ----------------------------
DROP PROCEDURE IF EXISTS `InsertTestQuestions`;
delimiter ;;
CREATE PROCEDURE `InsertTestQuestions`()
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
