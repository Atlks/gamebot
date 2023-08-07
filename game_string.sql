-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2023-08-07 15:56:11
-- 服务器版本： 5.7.40-log
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `bot_db`
--

-- --------------------------------------------------------

--
-- 表的结构 `game_string`
--

CREATE TABLE `game_string` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT '',
  `text` longtext
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 ROW_FORMAT=DYNAMIC;

--
-- 转存表中的数据 `game_string`
--

INSERT INTO `game_string` (`id`, `name`, `text`) VALUES
(1, '开始开奖', '期 [点击官方开奖](https://yuce281.com/#/)'),
(2, '上分机器人', '[[{\"text\":\"💹充值提现\", \"url\":\"http://t.me/pay202307_bot\"}]]'),
(3, '开奖验证', '[[{\"text\": \"开奖验证\",\"url\": \"https://etherscan.io/block/【区块号】\"}]]');

--
-- 转储表的索引
--

--
-- 表的索引 `game_string`
--
ALTER TABLE `game_string`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `game_string`
--
ALTER TABLE `game_string`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
