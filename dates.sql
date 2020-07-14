-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : mar. 14 juil. 2020 à 10:21
-- Version du serveur :  5.6.48
-- Version de PHP : 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `kqeogkts7zfzt6wy`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20200629162532', '2020-06-29 16:25:49', 1050),
('DoctrineMigrations\\Version20200629162642', '2020-06-29 16:26:53', 951),
('DoctrineMigrations\\Version20200630103453', '2020-06-30 10:35:08', 956),
('DoctrineMigrations\\Version20200630145400', '2020-06-30 14:55:23', 535),
('DoctrineMigrations\\Version20200704120156', '2020-07-04 12:16:59', 799),
('DoctrineMigrations\\Version20200705164852', '2020-07-05 16:49:21', 786),
('DoctrineMigrations\\Version20200706134218', '2020-07-06 13:43:15', 972),
('DoctrineMigrations\\Version20200708090809', '2020-07-08 13:59:08', 485),
('DoctrineMigrations\\Version20200708135748', '2020-07-08 13:59:47', 455),
('DoctrineMigrations\\Version20200708140536', '2020-07-08 14:06:08', 487),
('DoctrineMigrations\\Version20200708140904', '2020-07-08 14:10:28', 638),
('DoctrineMigrations\\Version20200708141431', '2020-07-08 14:17:38', 638),
('DoctrineMigrations\\Version20200708141631', '2020-07-08 14:17:39', 46);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reserve` tinyint(1) NOT NULL,
  `rayon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sous_rayon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reference` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `user_id`, `reserve`, `rayon`, `sous_rayon`, `title`, `reference`, `price`, `date`) VALUES
(35, 1, 0, 'Diététique', 'Rayon_1', 'Gérlinéa framboise', 391, 6, '2020-08-18 00:00:00'),
(36, 1, 0, 'Diététique', 'Rayon_1', 'Gérlinéa chocolat', 755, 3, '2020-09-13 00:00:00'),
(37, 1, 0, 'Diététique', 'Rayon_2', 'Isotan Energy Sport', 82, 1, '2020-09-23 00:00:00'),
(38, 1, 0, 'Diététique', 'Rayon_2', 'Gayelord Grenade', 646, 2, '2020-07-23 00:00:00'),
(39, 1, 0, 'Diététique', 'Rayon_3', 'Gerblé chocolat graine chia', 368, 2, '2020-09-17 00:00:00'),
(40, 1, 0, 'Diététique', 'Rayon_3', 'Gerblé son avoine', 849, 1, '2020-08-18 00:00:00'),
(41, 1, 0, 'Diététique', 'Rayon_3', 'Muesli chocolat', 825, 2, '2020-09-16 00:00:00'),
(42, 1, 0, 'Diététique', 'Rayon_4', 'Gerblé chocolat framboise', 611, 2, '2020-08-10 00:00:00'),
(43, 1, 0, 'Diététique', 'Rayon_4', 'Gerblé citron', 931, 3, '2020-08-27 00:00:00'),
(44, 1, 0, 'Diététique', 'Rayon_4', 'Karéléa', 841, 2, '2020-08-11 00:00:00'),
(45, 1, 0, 'Diététique', 'Rayon_4', 'Muesli fruits', 849, 2, '2020-08-23 00:00:00'),
(46, 1, 0, 'Diététique', 'Rayon_5', 'Gerblé sans gluten', 780, 4, '2020-08-23 00:00:00'),
(47, 1, 0, 'Diététique', 'Rayon_5', 'Pain brioché', 311, 3, '2020-08-15 00:00:00'),
(48, 1, 0, 'Diététique', 'Rayon_5', 'Allergo cake', 54, 3, '2020-08-16 00:00:00'),
(49, 1, 0, 'Diététique', 'Rayon_5', 'Gerblé cake', 47, 3, '2020-08-12 00:00:00'),
(50, 1, 0, 'Diététique', 'Rayon_5', 'Schar classic', 576, 3, '2020-08-06 00:00:00'),
(51, 1, 0, 'Diététique', 'Rayon_6', 'Croustillants fruits', 516, 4, '2020-08-22 00:00:00'),
(52, 1, 0, 'Diététique', 'Rayon_6', 'Brownies chocolat', 958, 2, '2020-08-21 00:00:00'),
(53, 1, 0, 'Diététique', 'Rayon_6', 'Cake fourré cacao', 154, 2, '2020-08-04 00:00:00'),
(54, 1, 0, 'Diététique', 'Rayon_6', 'Coquille moelleux', 888, 2, '2020-07-27 00:00:00'),
(55, 1, 0, 'Diététique', 'Rayon_6', 'Pain graines', NULL, NULL, '2020-07-26 00:00:00'),
(56, 1, 0, 'Diététique', 'Rayon_6', 'Schar pain', 214, NULL, '2020-08-14 00:00:00'),
(57, 1, 0, 'Diététique', 'Rayon_6', 'Gayelord', 737, 4, '2020-08-14 00:00:00'),
(58, 1, 0, 'Diététique', 'Rayon_6', 'Paella', 751, 5, '2020-08-13 00:00:00'),
(59, 1, 0, 'Diététique', 'Rayon_6', 'Glutten céréales', 389, 3, '2020-08-21 00:00:00'),
(60, 1, 0, 'Compote', 'Compote_1', 'Bio poire mangue', 271, 2, '2020-08-05 00:00:00'),
(61, 1, 0, 'Compote', 'Compote_1', '8 pomme ss', 166, 1, '2020-09-04 00:00:00'),
(62, 1, 0, 'Compote', 'Compote_1', '4 abricot + 4 pêches', 166, 1, '2020-08-21 00:00:00'),
(63, 1, 0, 'Compote', 'Compote_1', 'Pompotes', 828, 2, '2020-09-22 00:00:00'),
(64, 1, 0, 'Compote', 'Compote_1', 'Mont blanc caramel', 491, 1, '2020-09-28 00:00:00'),
(65, 1, 0, 'Compote', 'Compote_2', 'Crème chocolat', 109, 1, '2020-09-01 00:00:00'),
(66, 1, 0, 'Bébé', 'Bébé_lait_1', 'Baby 2 6-8mois', 609, 9, '2020-08-03 00:00:00'),
(67, 1, 0, 'Bébé', 'Bébé_lait_1', 'Baby croissance 6x25', 4, 3, '2020-09-25 00:00:00'),
(68, 1, 0, 'Bébé', 'Bébé_lait_2', 'Blédilait premium', 6, 10, '2020-08-28 00:00:00'),
(69, 1, 0, 'Bébé', 'Bébé_lait_2', 'Blédilait croissance 3', 822, 3, '2020-08-07 00:00:00'),
(70, 1, 0, 'Bébé', 'Bébé_lait_2', 'Croissance U', 869, 6, '2020-09-07 00:00:00'),
(71, 1, 0, 'Bébé', 'Bébé_lait_2', 'Baby croissance', 3, 9, '2020-08-16 00:00:00'),
(72, 1, 0, 'Bébé', 'Bébé_lait_3', 'Modilac 1er age', 553, 14, '2020-07-22 00:00:00'),
(73, 1, 0, 'Bébé', 'Bébé_lait_3', 'Celia labo 3', 185, 10, '2020-09-11 00:00:00'),
(74, 1, 0, 'Bébé', 'Bébé_lait_3', 'Eveil croissance bio', 24, 12, '2020-09-24 00:00:00'),
(75, 1, 0, 'Bébé', 'Bébé_lait_4', 'Blédidej pain choco', 61, 3, '2020-09-10 00:00:00'),
(76, 1, 0, 'Bébé', 'Bébé_lait_4', 'Blédidej brioché', 177, 3, '2020-09-10 00:00:00'),
(77, 1, 0, 'Bébé', 'Bébé_lait_5', 'Hip bio fromage blanc', 215, 2, '2020-09-07 00:00:00'),
(78, 1, 0, 'Bébé', 'Bébé_lait_5', 'Hip bio banane mangue', 582, 2, '2020-09-13 00:00:00'),
(79, 1, 0, 'Bébé', 'Bébé_lait_5', 'Lasagne saumon', 253, 2, '2020-08-18 00:00:00'),
(80, 1, 0, 'Bébé', 'Bébé_lait_5', 'Délice lait', 365, 7, '2020-08-22 00:00:00'),
(81, 1, 0, 'Bébé', 'Bébé_lait_5', '4 menus', 174, 4, '2020-09-01 00:00:00'),
(82, 1, 0, 'Bébé', 'Bébé_repas_1', 'Petit pois veau', 193, 1, '2020-08-15 00:00:00'),
(83, 1, 0, 'Bébé', 'Bébé_repas_1', 'Hachis parmentier', 155, 1, '2020-09-11 00:00:00'),
(84, 1, 0, 'Bébé', 'Bébé_repas_1', 'Pot au feu', 148, 1, '2020-09-11 00:00:00'),
(85, 1, 0, 'Bébé', 'Bébé_repas_1', 'Risotto', 261, 1, '2020-09-11 00:00:00'),
(86, 1, 0, 'Bébé', 'Bébé_repas_2', 'Artichault Nestlé', 200, 0, '2020-09-01 00:00:00'),
(87, 1, 0, 'Bébé', 'Bébé_repas_2', 'Blédichef fondu', 221, 1, '2020-09-25 00:00:00'),
(88, 1, 0, 'Bébé', 'Bébé_repas_2', 'Ratatouille', 132, 1, '2020-10-01 00:00:00'),
(89, 1, 0, 'Bébé', 'Bébé_repas_2', 'Parmentier', 415, 2, '2020-09-01 00:00:00'),
(90, 1, 0, 'Bébé', 'Bébé_repas_2', 'Biscuit pépites', 636, 1, '2020-09-06 00:00:00'),
(91, 1, 0, 'Bébé', 'Bébé_repas_2', 'Petit pois', 293, 1, '2020-09-01 00:00:00'),
(92, 1, 0, 'Bébé', 'Bébé_repas_2', 'Légumes volaille', 216, 1, '2020-09-11 00:00:00'),
(93, 1, 0, 'Bébé', 'Bébé_repas_2', 'Patate douce', 100, 2, '2020-08-09 00:00:00'),
(94, 1, 0, 'Bébé', 'Bébé_repas_3', 'Blédina pdt poulet', 79, 2, '2020-09-04 00:00:00'),
(95, 1, 0, 'Bébé', 'Bébé_repas_3', 'Tomates pates courgettes', 503, 2, '2020-10-01 00:00:00'),
(96, 1, 0, 'Bébé', 'Bébé_repas_3', 'Petit légumes saumon', 93, NULL, '2020-09-02 00:00:00'),
(97, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé brassé nature', 486, 1, '2020-10-01 00:00:00'),
(98, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé brassé banane', 542, 1, '2020-10-01 00:00:00'),
(99, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé brassé poire', 569, 1, '2020-10-01 00:00:00'),
(100, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé gourmand vanille', 215, 1, '2020-09-01 00:00:00'),
(101, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé petit laitage citron', 813, 1, '2020-09-01 00:00:00'),
(102, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé cacao vanille', 48, 2, '2020-10-01 00:00:00'),
(103, 1, 0, 'Bébé', 'Bébé_sucré_1', 'Nestlé gourmand cacao biscuit', 17, 1, '2020-09-01 00:00:00'),
(104, 1, 0, 'Bébé', 'Bébé_sucré_2', 'Nestlé natures pruneaux', 160, 2, '2020-09-01 00:00:00'),
(105, 1, 0, 'Bébé', 'Bébé_sucré_2', 'Nestlé liquide poire abricot', 881, 1, '2020-09-01 00:00:00'),
(106, 1, 0, 'Bébé', 'Bébé_sucré_3', 'Poire kiwi ananas', 246, 1, '2020-08-18 00:00:00'),
(107, 1, 0, 'Bébé', 'Bébé_sucré_3', 'Poire vanille 8x100', 376, 3, '2020-08-12 00:00:00'),
(108, 1, 0, 'Bio', 'Bio_bjorg', 'Eau coco', 993, 3, '2020-10-06 00:00:00'),
(109, 1, 0, 'Bio', 'Bio_bjorg', 'Dessert vanille', 753, 1, '2020-08-18 00:00:00'),
(110, 1, 0, 'Bio', 'Bio_bjorg', 'Boisson vanille', 739, 1, '2020-10-31 00:00:00'),
(111, 1, 0, 'Bio', 'Bio_bjorg', 'Lait amande chocolat', 946, 2, '2020-09-07 00:00:00'),
(112, 1, 0, 'Bio', 'Bio_bjorg', 'Galette 4 céréales', 78, 0, '2020-09-24 00:00:00'),
(113, 1, 0, 'Bio', 'Bio_farine', 'Préparation complet', 685, 2, '2020-08-18 00:00:00'),
(114, 1, 0, 'Bio', NULL, 'Nom à redéfinir', 746, NULL, '2020-09-29 00:00:00'),
(115, 1, 0, 'Bio', 'Bio_muesli', 'Muesli fruits', 716, 3, '2020-10-24 00:00:00'),
(116, 1, 0, 'Bio', 'Bio_muesli', 'Croustillants 3', 861, 4, '2020-10-02 00:00:00'),
(117, 1, 0, 'Bio', 'Bio_gateau', 'Mini moelleux pépites', 151, 1, '2020-10-06 00:00:00'),
(118, 1, 0, 'Bio', 'Bio_gateau', 'Mini moelleux chocolat', 14, 1, '2020-09-08 00:00:00'),
(119, 1, 0, 'Bio', 'Bio_gateau', 'Batonnet chocolat', 46, 1, '2020-10-03 00:00:00'),
(120, 1, 0, 'Bio', 'Bio_gateau', 'Céréal bio croc', 626, 2, '2020-09-17 00:00:00'),
(121, 1, 0, 'Bio', 'Bio_gateau_2', 'Mini moelleux framboise', 789, 1, '2020-09-23 00:00:00'),
(122, 1, 0, 'Bio', 'Bio_gateau_2', 'Mini cookie chia', 283, 2, '2020-10-27 00:00:00'),
(123, 1, 0, 'Bio', 'Bio_gateau_2', 'Sablé nappés chocolat noir', 737, 1, '2020-09-27 00:00:00'),
(124, 1, 0, 'Bio', 'Bio_gateau_3', 'Sablé coco citron', 719, 2, '2020-10-01 00:00:00'),
(125, 1, 0, 'Bio', 'Bio_gateau_3', 'Noisette', 205, 2, '2020-09-12 00:00:00'),
(126, 1, 0, 'Bio', 'Bio_gateau_3', 'Noix coco', 212, 1, '2020-09-04 00:00:00'),
(127, 1, 0, 'Bio', 'Bio_gateau_3', 'Amande', 182, 2, '2020-08-11 00:00:00'),
(128, 1, 0, 'Bio', 'Bio_gateau_3', 'Good kidz chocolat', 285, 2, '2020-09-18 00:00:00'),
(129, 1, 0, 'Bio', 'Bio_gateau_3', 'Madeleine bjorg', 412, 2, '2020-09-15 00:00:00'),
(130, 1, 0, 'Bio', 'Bio_apero_2', 'L\'appétisserie mimosa', 271, 2, '2020-09-12 00:00:00'),
(131, 1, 0, 'Bio', 'Bio_apero_2', 'L\'appétisserie romarin', 331, 2, '2020-09-08 00:00:00'),
(132, 1, 0, 'Bio', 'Bio_repas_1', 'Pavé fondant', 95, NULL, '2020-10-17 00:00:00'),
(133, 1, 0, 'Bio', 'Bio_repas_2', 'Mélange céréales mexicain', 524, 3, '2020-10-25 00:00:00'),
(134, 1, 0, 'Bio', 'Bio_repas_2', 'Mélange céréales mediterranéen', 531, 3, '2020-10-25 00:00:00'),
(135, 1, 0, 'Bio', 'Bio_repas_2', 'Mélange céréales cury', 548, 3, '2020-10-24 00:00:00'),
(136, 1, 0, 'Bio', 'Bio_repas_2', 'Duo quinoa', 555, 3, '2020-10-25 00:00:00'),
(137, 1, 0, 'Bio', 'Bio_repas_3', 'Quinoa royal', 533, 2, '2020-08-13 00:00:00'),
(138, 1, 0, 'Bio', 'Bio_repas_3', 'Jardin bio chèvre', 992, 2, '2020-09-01 00:00:00'),
(139, 1, 0, 'Bio', 'Bio_repas_3', 'Céréales bio thym', 527, 3, '2020-10-03 00:00:00'),
(140, 1, 0, 'Bio', 'Bio_repas_3', 'Jardin bio trio sésame', 705, 2, '2020-10-01 00:00:00'),
(141, 1, 0, 'Bio', 'Bio_repas_3', 'Jardin bio céréales lentilles', 67, 2, '2020-09-01 00:00:00'),
(142, 1, 0, 'Bio', 'Bio_huile', 'Huile lin', 123, 2, '2020-10-15 00:00:00'),
(146, 1, 1, 'Compote', NULL, 'Mont Blanc Vanille', NULL, NULL, '2020-12-28 00:00:00'),
(147, 1, 1, 'Compote', NULL, 'Mont Blanc Praline', NULL, NULL, '2020-10-28 00:00:00'),
(148, 1, 0, 'test2', NULL, 'test2', NULL, NULL, '2020-09-01 00:00:00'),
(149, 1, 1, 'Compote', NULL, 'Mont Blanc Caramel', NULL, NULL, '2020-10-28 00:00:00'),
(151, 1, 1, 'Compote', NULL, 'Mont Blanc Chocolat', NULL, NULL, '2020-08-28 00:00:00'),
(152, 1, 1, 'Compote', NULL, 'Pom potes 48 gourdes pomme/poire', NULL, NULL, '2020-08-28 00:00:00'),
(153, 1, 1, 'Compote', 'Compote_1', 'Mont Blanc Chocolat', 7, 1, '2020-08-25 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci COMMENT '(DC2Type:json)',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `password`, `email`, `roles`, `slug`) VALUES
(1, 'Bryan', 'Parmentelot', '$argon2id$v=19$m=65536,t=4,p=1$EA77Y711/jkHVL2YKGQK5A$FAZRlkw168SdOwLYVW2Vz8DOxSuWuqG9D+Mtgw+PCs4', 'parmentelot.bryan@hotmail.fr', NULL, 'bryan-parmentelot'),
(2, 'Johanna', 'Doe', '$argon2id$v=19$m=65536,t=4,p=1$V9QASIMdDERs+RtANoDyUg$5JxS3mZpf+CuRZGskmvsRmAkhmInNr7iHafEO1LIwao', 'johndoe@hotmail.fr', '[]', 'johanna-doe'),
(4, 'Muta', 'Chacha', '$argon2id$v=19$m=65536,t=4,p=1$iVs58zz9oWuYjwOPc+Wg5g$NT7sN3Dwlojn824f6+2VommpJlyC/y12PIk0REaw3Ec', 'muta@hotmail.fr', '[]', 'muta-chacha'),
(5, 'test', 'test', '$argon2id$v=19$m=65536,t=4,p=1$5a+JX1hFvSZ55aJEYWo+VQ$x9rSD28f+KuDds23IL3uKW/UA+R4331hYawPiprqkEs', 'test@hotmail.fr', '[]', 'test-test'),
(11, 'Bryan', 'Parmentelot', '$argon2id$v=19$m=65536,t=4,p=1$Onp+thsaBZwF0vt9N+KkmA$kv+BCBI8RIDDWWHc7N1WKlwX4sBhDiJgZSJ94OGMNdY', 'parmentelot-bryan@hotmail.fr', '[]', 'bryan-parmentelot');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D34A04ADA76ED395` (`user_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_D34A04ADA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
