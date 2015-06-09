-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Mar 09 Juin 2015 à 11:00
-- Version du serveur: 5.6.12-log
-- Version de PHP: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `thismoment-bdd`
--
CREATE DATABASE IF NOT EXISTS `thismoment-bdd` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `thismoment-bdd`;

-- --------------------------------------------------------

--
-- Structure de la table `mail_list`
--

CREATE TABLE IF NOT EXISTS `mail_list` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=18 ;

--
-- Contenu de la table `mail_list`
--

INSERT INTO `mail_list` (`ID`, `mail`, `prenom`, `nom`, `message`) VALUES
(1, 'abdelazziz@gmail.com', 'Abdel', 'Azziz', 'chien d''infidele'),
(2, 'mouloud@gmail.com', 'mou', 'loud', 'lol'),
(3, 'articho@gmail.com', 'Sylar', 'Artichot', 'loplhf'),
(4, 'aaa@aaa.com', 'Benoit', 'dutens', 'bonjour Ã  toi'),
(5, 'moustafa@hotmail.be', 'sala', 'John', 'C''est la fÃªte ici Ã  l''air libre !'),
(6, 'Nana@hotmail.fr', 'Mimi', 'Mati', 'Salut les mecs ca gaz?'),
(7, 'appelford@appelford.com', 'Alexandre', 'Plennevaux', 'What do youuu want nigga?'),
(8, 'abdelazziz@gmail.com', 'Michou', 'Bernard', 'salut'),
(9, 'abdelazziz@gmail.com', 'Michou', 'Bernard', 'salut'),
(10, 'cedric@aaa.com', 'Cedric', 'Hubert', 'Salut les mecs'),
(11, 'cedric@aaa.com', 'Cedric', 'Hubert', 'Lolilol'),
(12, 'aaa@aaa.com', 'DigDougDag', 'PointyNoise', 'Salut les mecs mdr'),
(13, 'aaa@aaa.com', 'DigDougDag', 'PointyNoise', 'Salut les mecs mdr'),
(14, 'aaa@aaa.com', 'DigDougDag', 'PointyNoise', 'Salut les mecs mdr'),
(15, 'aaa@aaa.com', 'DigDougDag', 'PointyNoise', 'Salut les mecs mdr'),
(16, 'aaa@aaa.com', 'DigDougDag', 'PointyNoise', 'Salut les mecs mdr'),
(17, 'ardech@hotmail.fr', 'Constinant', 'Poupoux', 'Salut les amis');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
