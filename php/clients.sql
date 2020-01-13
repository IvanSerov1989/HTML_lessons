-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Янв 13 2020 г., 18:43
-- Версия сервера: 10.1.10-MariaDB
-- Версия PHP: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `clients`
--

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE `clients` (
  `id` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `e-mail` varchar(30) NOT NULL,
  `phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `name`, `e-mail`, `phone`) VALUES
(1, 'Brian E. Gordon', 'BrianE@teleworm.us', ' 610-826-5769'),
(2, 'Kamilah D. Hodges', 'KamilahD@jourrapide.com', '352-472-6060'),
(3, 'Elsie B. Schorr', 'ElsieB@teleworm.us', '425-629-9825'),
(4, 'Roger C. Woodbury', 'RogerC@rhyta.com', '480-838-0025'),
(5, 'Martha N. Swope', 'MarthaNSwope@rhyta.com', '317-847-1902'),
(6, 'Nancy J. Fischer', ' NancyJ@rhyta.com', '773-616-6006'),
(7, 'Robin M. Sears', 'RobinM@jourrapide.com', '440-256-0380'),
(8, 'Richard G. Hall', ' RichardG@armyspy.com', '973-382-0672'),
(9, 'Johnny M. Logan', 'JohnnyM@rhyta.com', '404-483-2898'),
(10, 'Joel K. Mitchell', 'JoelK@jourrapide.com', ' 918-451-8403');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
