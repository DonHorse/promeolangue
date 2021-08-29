-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : Dim 29 août 2021 à 15:36
-- Version du serveur :  5.7.24
-- Version de PHP : 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `promeo_langue`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` text NOT NULL,
  `img` varchar(255) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `title`, `text`, `img`, `create_date`) VALUES
(1, 'test 3 ', 'un grand contenu avec plein de choses', 'https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg', '2021-08-19 16:06:54'),
(3, 'Les vacances chez Promeo !', 'Les vacances , c\'est de juillet à fin août chez Promeo ! \n\nA très bientôt', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJEyZwZCGoOqYW-dVdf1wQlK5Xz-AyPzlAQ&usqp=CAU', '2021-08-19 21:09:55');

-- --------------------------------------------------------

--
-- Structure de la table `info_page`
--

CREATE TABLE `info_page` (
  `id` int(11) NOT NULL,
  `footer1` text NOT NULL,
  `footer2` text NOT NULL,
  `footer3` text NOT NULL,
  `bodyTitle` text NOT NULL,
  `body1` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `info_page`
--

INSERT INTO `info_page` (`id`, `footer1`, `footer2`, `footer3`, `bodyTitle`, `body1`) VALUES
(1, 'Adresse : \nZAC du bois de Plaisance-Venette FR,\n87 Av. de la Mare Gessart, \n60280 Compiègne', 'Téléphone : 03 44 20 70 10', 'Horraires : \nJours ouvrés\nLe matin de 8h00 à 12h30 \nL\'après midi de 13h30 à 17h30', 'Bienvenue sur le site Promeo Langue', 'Ce site est adressé à vous , étudiant, futurs étudiants et toute personne désireuse de formation chez nous, afin d\'évaluer votre niveau en langues étrangères. \n\nCe sont de petits questionnaire qui vont être utiles pour cibler vos besoins !\n\nRejoignez-nous dès à présent !');

-- --------------------------------------------------------

--
-- Structure de la table `questionnaires`
--

CREATE TABLE `questionnaires` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `language` varchar(255) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creator_name` varchar(255) NOT NULL,
  `creator_mail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `questionnaires`
--

INSERT INTO `questionnaires` (`id`, `name`, `language`, `creation_date`, `creator_name`, `creator_mail`) VALUES
(1, 'test1', '', '2021-08-20 17:01:45', 'mr test', 'test@test.com'),
(2, 'test anglais 1', '', '2021-08-20 17:54:09', 'admin', 'test@test.com');

-- --------------------------------------------------------

--
-- Structure de la table `question_reponse`
--

CREATE TABLE `question_reponse` (
  `id` int(11) NOT NULL,
  `question` text NOT NULL,
  `reponse_1` text NOT NULL,
  `reponse_2` text NOT NULL,
  `reponse_3` text NOT NULL,
  `reponse_4` text NOT NULL,
  `correct` int(11) NOT NULL,
  `questionnaire_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `question_reponse`
--

INSERT INTO `question_reponse` (`id`, `question`, `reponse_1`, `reponse_2`, `reponse_3`, `reponse_4`, `correct`, `questionnaire_id`) VALUES
(3, 'test : bonne réponse = 2', 'rep 1', 'rep 2', 'rep 3', 'rep 4', 2, 2),
(4, 'test : bonne réponse = 3', 'rep 1', 'rep 2', 'rep 3', 'rep 4', 3, 2),
(5, 'test : bonne réponse = 1', 'rep 1', 'rep 2', 'rep 3', 'rep 4', 1, 2);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'utilisateur',
  `inscriptionDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `FirstName`, `LastName`, `email`, `password`, `role`, `inscriptionDate`) VALUES
(1, 'test', '1', 'test1@test.com', '$2b$10$SrPaYKXiVo.hkoZ5.Z0Qh.UxIEvN7Md.6Ulo9AVZ3gLEPI5kMot9i', 'utilisateur', '2021-08-08 18:37:41'),
(2, 'test', '2', 'test2@test.com', '$2b$10$/fpz3Iv.Bxx7bKFtWi0LFOqd1j9pBJi7gECEA5U/egAnpsS09a1F6', 'utilisateur', '2021-08-08 18:45:38'),
(3, 'test', '3', 'test3@test.com', '$2b$10$xvOXcrRv7sTqI9X/HaT8feiqfCNBQf3BuBKcmk1PwHenHJrAVJeKG', 'formateur', '2021-08-08 18:57:16'),
(4, 'test', '4', 'test4@test.com', '$2b$10$qdqujEqVtugEQXy0lgtbKeFMPveVOnCGdY2QkBpMsdepe/V9v4DTG', 'utilisateur', '2021-08-15 14:10:26'),
(5, 'Admin', 'Promeo', 'admin@promeo.com', '$2b$10$C8.cPYo7CMiURzet8CWOReTXnlJzkusuCnXgJb/pSsH6IUTRydrz.', 'administrateur', '2021-08-16 13:39:23');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `info_page`
--
ALTER TABLE `info_page`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `questionnaires`
--
ALTER TABLE `questionnaires`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `question_reponse`
--
ALTER TABLE `question_reponse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `questionnaire_id` (`questionnaire_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `info_page`
--
ALTER TABLE `info_page`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `questionnaires`
--
ALTER TABLE `questionnaires`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `question_reponse`
--
ALTER TABLE `question_reponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
