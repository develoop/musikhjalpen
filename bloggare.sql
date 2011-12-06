-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Värd: 127.0.0.1
-- Skapad: 06 dec 2011 kl 14:50
-- Serverversion: 5.5.16
-- PHP-version: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databas: `ihelp`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `bloggare`
--

CREATE TABLE IF NOT EXISTS `bloggare` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namn` varchar(100) NOT NULL,
  `bild` varchar(100) NOT NULL,
  `insamling` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumpning av Data i tabell `bloggare`
--

INSERT INTO `bloggare` (`id`, `namn`, `bild`, `insamling`, `url`) VALUES
(1, 'Alex Schulman', 'alex.png', 100001, 'http://blogg.aftonbladet.se/schulman');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
