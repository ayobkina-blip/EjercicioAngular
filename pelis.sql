-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-01-2026 a las 20:11:57
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pelis`
--
CREATE DATABASE IF NOT EXISTS `pelis` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pelis`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `year` int(11) NOT NULL,
  `description` text NOT NULL,
  `duration` text NOT NULL,
  `genre` text NOT NULL,
  `rating` int(11) NOT NULL,
  `imageUrl` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `movies`
--

INSERT INTO `movies` (`id`, `name`, `year`, `description`, `duration`, `genre`, `rating`, `imageUrl`) VALUES
(5, 'Sólo en casa', 2, 'Es un rollo', '12', 'Niños', 1, 'assets/imgs/a.png'),
(6, 'Lo que el viento se llevo!!', 1800, 'un rollo de peli', '10', 'Drama', 2, 'assets/imgs/b.png'),
(8, 'Es un rollo estar en casa', 3, 'Lo que el viento', '10', 'accion', 3, ''),
(9, 'Pepito perez', 2012, 'sdfsdfsd', '10', 'accion', 4, ''),
(10, 'El coloso en llamas', 2010, 'Incendio en New York', '19', 'Drama', 5, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Salas`
--

CREATE TABLE IF NOT EXISTS `Salas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_movie` int(11) NOT NULL,
  `Nombre` text NOT NULL,
  `Ciudad` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `Salas`
--

INSERT INTO `Salas` (`id`, `id_movie`, `Nombre`, `Ciudad`) VALUES
(1, 5, 'Cines Alameda', 'Valencia'),
(3, 5, 'Cines Els Ports', 'Alacant'),
(5, 6, 'Cines Alameda', 'Valencia'),
(6, 5, 'Cines Cinturon Rojo', 'Castellón'),
(7, 9, 'Cines Cinturon Rojo', 'Castellón');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
