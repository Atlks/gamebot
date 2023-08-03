/*
 Navicat Premium Data Transfer

 Source Server         : locx
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : jbdb

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 03/08/2023 21:49:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for bet_types
-- ----------------------------
DROP TABLE IF EXISTS `bet_types`;
CREATE TABLE `bet_types`  (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Display` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '显示名称',
  `Regex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '下注指令名称',
  `Bet_Min` int(11) NULL DEFAULT NULL COMMENT '最小下注',
  `Bet_Max` int(11) NULL DEFAULT NULL COMMENT '最大下注',
  `Bet_Max_Total` int(11) NULL DEFAULT NULL COMMENT '最大总下注',
  `Odds` decimal(11, 2) NULL DEFAULT NULL COMMENT '赔率',
  `Create_Date` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建日期',
  `Update_Date` timestamp NULL DEFAULT NULL COMMENT '更新日期\r\n',
  `type` int(11) NULL DEFAULT 0 COMMENT '代码逻辑里的type,详细内容参考代码',
  `value` int(11) NULL DEFAULT 0 COMMENT '扩展值,用来表示和值',
  `玩法` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE,
  INDEX `Id`(`Id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of bet_types
-- ----------------------------
INSERT INTO `bet_types` VALUES (1, 'a', 'a([1-9][0-9]*)', 100, 10000000, 100000000, 1.00, '2023-03-04 14:09:55', '2023-04-11 21:01:29', 0, 0, NULL);
INSERT INTO `bet_types` VALUES (5, NULL, '\\d\\/\\d', 100, 50000, 50000, 1.00, '2023-08-03 20:09:28', NULL, 0, 0, '特码球玩法');
INSERT INTO `bet_types` VALUES (6, NULL, '\\d\\/[大小单双]', 0, 50000, 50000, 1.00, '2023-08-03 20:11:35', NULL, 0, 0, '特码球大小单双玩法');

SET FOREIGN_KEY_CHECKS = 1;
