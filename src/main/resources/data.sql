INSERT INTO VILLE (nom)
VALUES ('Tétouan'),
       ('Casablanca'),
       ('Rabat'),
       ('Kénitra'),
       ('Marrakech');

INSERT INTO UTILISATEUR (nom, prenom, naissance, tel, email, password, ville_id, role)
VALUES ('Zouhir', 'Nadia', '1985-03-12', '+212 0612345678', 'nadia.zouhir@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 1, 'ROLE_USER'),
       ('Abdallah', 'Rachid', '1992-07-25', '+212 0678901234', 'rachid.abdallah@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 2, 'ROLE_USER'),
       ('Hamzaoui', 'Fatima', '1978-12-05', '+212 0654321098', 'fatima.hamzaoui@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 4, 'ROLE_USER'),
       ('Kadiri', 'Karima', '1990-02-18', '+212 0687654321', 'karima.kadiri@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 4, 'ROLE_USER'),
       ('Lamrani', 'Yassin', '1982-09-30', '+212 0612345678', 'yassin.lamrani@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 1, 'ROLE_USER'),
       ('Bouaziz', 'Leila', '1987-05-22', '+212 0678901234', 'leila.bouaziz@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 2, 'ROLE_USER'),
       ('Jalil', 'Ahmed', '1995-11-08', '+212 0654321098', 'ahmed.jalil@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 3, 'ROLE_USER'),
       ('El Fassi', 'Youssef', '1989-04-14', '+212 0687654321', 'youssef.elfassi@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 1, 'ROLE_USER'),
       ('El Mansouri', 'Sara', '1980-08-02', '+212 0612345678', 'sara.elmansouri@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 3, 'ROLE_USER'),
       ('El Khatib', 'Ahmed', '1993-01-17', '+212 0678901234', 'ahmed.elkhatib@google.com',
        '$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2', 3, 'ROLE_USER');


INSERT INTO PERSON (
    nom, active, prenom, email, tel, password, competence, ville_id, role, exterieur, remarque, description
)
VALUES
    ("ELANRIF", 1, "Said Baco", "elanrif@gmail.com", "+212 0612345678",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2", "",
     1, "ROLE_ADMIN",null, null, null),

    ("jhon", 1, "Smith", "smith.jhon@gmail.com", "+212 0678901234",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2", "",
     3, "ROLE_ASSISTANT",null, null, null),

    ("Katrine", 1, "Koet", "Koet.katrine@gmail.com", "+212 0654321098",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2",
     "Intelligence Artificielle, Traitement du Langage Naturel", 2, "ROLE_FORMATEUR", 0,
     "Un formateur expert en IA et traitement du langage naturel.",
     "Je m'appelle Katrine Koet, et je suis passionnée par le domaine de l'Intelligence Artificielle
    (IA) et du Traitement du Langage Naturel (TLN). Diplômée en informatique de l'Université XYZ,
    j'ai consacré ma carrière à la recherche et au développement d'algorithmes d'apprentissage automatique avancés.
    \n\nMon expertise s'étend à la conception et à l'application de modèles IA pour résoudre des problèmes complexes.
    En plus de mes travaux de recherche, j'ai animé diverses formations et ateliers sur l'IA,
    partageant mes connaissances avec passion. Ma mission est d'inspirer et d'accompagner les apprenants dans le monde fascinant de l'IA et du TLN."),

    ("Patric", 1, "Luc", "Luc.Patric@gmail.com", "+212 0687654321",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2", "Maitrise de langage C++,Développement Web, Front-end, Back-end", 4,
     "ROLE_FORMATEUR", 0,
     "Un formateur expert en développement logiciel.",
     "Je m'appelle Luc Patric, et je suis un formateur spécialisé dans le développement logiciel.
    Fort de ma maîtrise des langages de programmation tels que C++, ainsi que du développement web
    tant en front-end qu'en back-end, j'ai acquis une expérience significative dans l'industrie informatique.
    \n\nMon parcours professionnel comprend des projets variés, allant de la création d'applications robustes
    à la conception d'interfaces utilisateur conviviales. Je suis passionné par le partage de mes connaissances
    et de mes compétences avec d'autres passionnés de programmation.
    Rejoignez mes cours pour explorer le monde du développement logiciel avec enthousiasme et engagement."),

    ("Lamrani", 1, "Yassin", "yassin.lamrani@gmail.com", "+212 0612345678",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2", "Développement Mobile, iOS, Android",
     2, "ROLE_FORMATEUR", 0,
     "Un formateur passionné par le développement mobile.",
     "Je m'appelle Yassin Lamrani, et ma passion réside dans le développement mobile, notamment sur les plateformes iOS et Android.
    Mon expertise comprend la conception d'applications conviviales, la résolution de problèmes complexes et la mise en œuvre de solutions innovantes.
    \n\nAu cours de ma carrière, j'ai eu l'occasion de travailler sur des projets variés, de la création
    d'applications de qualité supérieure à la formation d'équipes de développeurs. Mon objectif est de guider
    les apprenants à travers le processus de développement mobile, en partageant des conseils pratiques et des techniques avancées."),

    ("Bouaziz", 1, "Leila", "leila.bouaziz@gmail.com", "+212 0678901234",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2", "Design Graphique, UX/UI Design", 1,
     "ROLE_FORMATEUR", 1,
     "Un formateur créatif en design graphique et UX/UI.",
     "Je m'appelle Leila Bouaziz, et je suis passionnée par le design graphique et l'expérience utilisateur (UX/UI).
    Mon parcours comprend des années d'expérience dans la création visuelle, du développement de concepts
    artistiques à la réalisation d'interfaces utilisateur esthétiques.\n\nEn tant que formatrice, je m'efforce
    de transmettre ma passion pour le design graphique en fournissant des cours engageants et axés sur la pratique.
    Rejoignez-moi pour explorer les principes du design, les outils créatifs et les meilleures pratiques en matière d'UX/UI."),

    ("Christophe", 1, "Maë", "Maë.Christophe@gmail.com", "+212 0654321098",
     "$2a$12$WMBBO/vTKg6Ubd8RF4I/puLZe56rIObrw/i1SsMU3U.6P3/78zku2", "Marketing Digital, Réseaux Sociaux",
     3, "ROLE_FORMATEUR", 1,
     "Un formateur expert en marketing digital,très comptentent sur son domaine.",
     "Je m'appelle Maë Christophe, et je suis un formateur spécialisé dans le domaine du marketing digital et des réseaux sociaux.
    Mon parcours professionnel inclut la gestion de campagnes marketing réussies, l'optimisation des stratégies de médias sociaux
    et la création de contenus percutants.\n\nEn tant que formateur, je partage mes connaissances approfondies du marketing digital
    pour aider les apprenants à comprendre les dernières tendances, les meilleures pratiques et les outils essentiels.
    Rejoignez mes cours pour explorer le monde dynamique du marketing digital avec moi.") ;


INSERT INTO FORMATION (nom, objectif,programme, heure, ville_id, cout,start_date)
VALUES ("Formation Spring Boot",
        "Maîtrisez le développement d'applications Java avec Spring Boot.
        Cette formation approfondie vous plonge dans l'écosystème robuste de Spring, vous enseignant
        comment créer des applications Java efficaces avec une configuration minimale.",
        "
   <h3><span style=\"color: var(--tw-prose-bold);\">Partie 1 : Introduction à Spring Boot et Fondamentaux</span></h3><ul><li>Jour 1-2 : Présentation de Spring Boot, historique et avantages.</li><li>Jour 3-4 : Installation et configuration de l''environnement de développement.</li><li>Jour 5-7 : Principes fondamentaux de Spring Boot, inversion de contrôle (IoC) et injection de dépendances.</li><li><br></li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 2 : Développement de Services RESTful</span></p><ul><li>Jour 1-2 : Création de services RESTful avec Spring Boot.</li><li>Jour 3-4 : Utilisation des annotations et des conventions.</li><li>Jour 5-7 : Gestion des erreurs, validation des données et documentation des API.</li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 3 : Accès aux Bases de Données avec Spring Boot</span></p><ul><li>Jour 1-2 : Intégration avec les bases de données relationnelles.</li><li>Jour 3-4 : Utilisation de Spring Data JPA pour la persistance des données.</li><li>Jour 5-7 : Transactions et gestion des migrations de bases de données.</li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 4 : Sécurité dans les Applications Spring Boot</span></p><ul><li>Jour 1-2 : Concepts de sécurité dans Spring Boot.</li><li>Jour 3-4 : Mise en place de l''authentification et de l''autorisation.</li><li>Jour 5-7 : Sécurisation des services REST et gestion des tokens.</li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 5 : Développement Avancé avec Spring Boot</span></p><ul><li>Jour 1-2 : Utilisation des modules Spring Boot avancés.</li><li>Jour 3-4 : Intégration avec des services externes.</li><li>Jour 5-7 : Gestion des files d''attente et des tâches asynchrones.</li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 6 : Tests et Débogage dans Spring Boot</span></p><ul><li>Jour 1-2 : Écriture de tests unitaires avec JUnit et Mockito.</li><li>Jour 3-4 : Tests d''intégration avec Spring Boot Test.</li><li>Jour 5-7 : Stratégies de débogage et optimisation des performances.</li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 7 : Déploiement et Gestion des Configurations</span></p><ul><li>Jour 1-2 : Packaging et déploiement des applications Spring Boot.</li><li>Jour 3-4 : Gestion des configurations avec Spring Boot.</li><li>Jour 5-7 : Utilisation de Docker pour le déploiement.</li></ul><p><br></p><p><span style=\"color: var(--tw-prose-bold);\">Partie 8 : Projets Pratiques et Évaluation Finale</span></p><ul><li>Jour 1-5 : Travaux pratiques sur des projets concrets. Présentation de projets finaux et évaluation.</li></ul><h3><br></h3><h3><span style=\"color: var(--tw-prose-bold);\">Partie 9 : Conclusion et Perspectives</span></h3><ul><li>Jour 1-3 : Récapitulation de la formation et discussions sur les opportunités futures. Conseils pour la continuation de l''apprentissage et exploration avancée de Spring Boot.</li></ul><p><br></p>",
        92, 1, 500,"2024-01-07" ),
       ("Formation ReactJS",
        "L'objectif de cette formation est d'immerger les participants dans le monde du développement web
        moderne avec React JS, en les dotant des compétences nécessaires pour concevoir des interfaces utilisateur interactives et dynamiques. Les participants apprendront à utiliser efficacement React
        pour créer des composants réutilisables, gérer l'état de l'application de manière efficace, interagir
        avec des API externes, et comprendre les concepts fondamentaux du développement d'applications web
        réactives.",

        "<h3>Partie 1 : Introduction à React JS et Concepts Fondamentaux </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Présentation de React JS, son écosystème et son importance dans le développement web moderne. </li><li class=\"ql-indent-1\">Jour 3-4 : Mise en place de l''environnement de développement avec Node.js et npm. </li><li class=\"ql-indent-1\">Jour 5-7 : Compréhension des composants React, JSX, et premiers pas avec la création de composants simples. </li></ul><p><br></p><h3>Partie 2 : Gestion de l''État et des Propriétés </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Compréhension du cycle de vie des composants.</li><li class=\"ql-indent-1\">Jour 3-4 : Gestion de l''état local et des propriétés des composants. </li><li class=\"ql-indent-1\">Jour 5-7 : Utilisation d''événements pour interagir avec les composants et mettre à jour l''état. </li><li class=\"ql-indent-1\">Partie 3 : Composants Réutilisables et Compositions </li><li class=\"ql-indent-1\">Jour 1-2 : Création de composants réutilisables et structuration de l''application. </li><li class=\"ql-indent-1\">Jour 3-4 : Utilisation des propriétés enfants (props.children) pour la composition. </li><li class=\"ql-indent-1\">Jour 5-7 : Application des bonnes pratiques de conception des composants.</li><li class=\"ql-indent-1\">Partie 4 : Navigation et Routage avec React Router </li><li class=\"ql-indent-1\">Jour 1-2 : Introduction à React Router pour la navigation dans les applications React. </li><li class=\"ql-indent-1\">Jour 3-4 : Gestion des paramètres d''URL et création de routes dynamiques. </li><li class=\"ql-indent-1\">Jour 5-7 : Mise en œuvre de la navigation entre les pages avec React Router. </li></ul><p><br></p><h3>Partie 5 : Gestion des Formulaires et Validation </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Création de formulaires contrôlés avec React. </li><li class=\"ql-indent-1\">Jour 3-4 : Gestion des changements d''état et validation des données. </li><li class=\"ql-indent-1\">Jour 5-7 : Utilisation de bibliothèques tierces pour simplifier la gestion des formulaires. </li></ul><p><br></p><h3>Partie 6 : Communication avec les API externes </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Utilisation d''API REST avec React pour récupérer et afficher des données. </li><li class=\"ql-indent-1\">Jour 3-4 : Gestion des requêtes asynchrones avec les promesses ou async/await. </li><li class=\"ql-indent-1\">Jour 5-7 : Manipulation et transformation des données provenant des API externes. </li></ul><p><br></p><h3>Partie 7 : Gestion de l''État Global avec Redux </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Introduction à Redux pour la gestion de l''état global.</li><li class=\"ql-indent-1\">Jour 3-4 : Création de actions, reducers et store avec Redux.</li><li class=\"ql-indent-1\">Jour 5-7 : Intégration de Redux dans une application React et gestion des actions asynchrones. </li></ul><p><br></p><h3>Partie 8 : Tests Unitaires et Intégration avec React </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Écriture de tests unitaires avec Jest et Enzyme. </li><li class=\"ql-indent-1\">Jour 3-4 : Tests d''intégration pour s''assurer du bon fonctionnement des composants. </li><li class=\"ql-indent-1\">Jour 5-7 : Stratégies de débogage et optimisation des performances.</li></ul><p><br></p><h3>Partie 9 : Déploiement d''Applications React et Bonnes Pratiques </h3><ul><li class=\"ql-indent-1\">Jour 1-2 : Build et déploiement d''applications React. </li><li class=\"ql-indent-1\">Jour 3-4 : Gestion des environnements de production. </li><li class=\"ql-indent-1\">Jour 5-7 : Bonnes pratiques de performance et sécurité dans le déploiement. </li></ul><p><br></p><h3>Partie 10 : Projets Pratiques et Évaluation Finale </h3><ul><li class=\"ql-indent-1\">Jour 1-5 : Travaux pratiques sur des projets concrets. Présentation de projets finaux et évaluation.</li></ul><p><br></p><h3>Partie 11 : Conclusion et Perspectives </h3><ul><li class=\"ql-indent-1\">Jour 1-3 : Récapitulation de la formation et discussions sur les opportunités futures. Conseils pour la continuation de l''apprentissage et exploration avancée de React JS.</li></ul>",
        100, 3, 1200 ,"2023-02-07"),

       ("E-commerce",
        "L'objectif principal de cette formation est de fournir aux participants une expertise complète dans le développement d'applications e-commerce, en mettant l'accent sur la conception et la mise en œuvre d'une plateforme robuste et conviviale. Les participants apprendront à construire des solutions e-commerce efficaces en intégrant des fonctionnalités telles que le traitement des paiements, la gestion des commandes, la sécurité des transactions et une expérience utilisateur optimale. Cette formation vise à équiper les participants des compétences nécessaires pour créer des sites de commerce électronique modernes et compétitifs.",
        "<h3><span style=\"color: var(--tw-prose-bold);\">Partie 1 : Introduction à l''E-commerce et Planification Stratégique</span></h3><ul><li>Jour 1-2 : Compréhension du paysage de l''e-commerce, identification des tendances et des opportunités.</li><li>Jour 3-4 : Planification stratégique du projet e-commerce, définition claire des objectifs.</li><li>Jour 5-7 : Choix de la technologie, élaboration de l''architecture et conception initiale.</li><li><br></li></ul><h3><span style=\"color: var(--tw-prose-bold);\">Partie 2 : Développement de la Stratégie E-commerce</span></h3><ul><li>Jour 1-2 : Mise en place de l''environnement stratégique.</li><li>Jour 3-4 : Construction des fondations de la stratégie e-commerce.</li><li>Jour 5-7 : Intégration des fonctionnalités essentielles : gestion de catalogue, navigation, recherche.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 3 : Gestion des Utilisateurs et Sécurité Authentification</span></h3><ul><li>Jour 1-2 : Mise en place de l''authentification et de l''autorisation.</li><li>Jour 3-4 : Gestion des profils utilisateurs et personnalisation.</li><li>Jour 5-7 : Sécurité des données utilisateur et protection contre les fraudes.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 4 : Traitement des Transactions et Sécurité Financière</span></h3><ul><li>Jour 1-2 : Intégration de passerelles de paiement sécurisées.</li><li>Jour 3-4 : Gestion des transactions, sécurité financière et conformité PCI.</li><li>Jour 5-7 : Optimisation du processus de paiement et réduction des abandons de panier.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 5 : Gestion des Commandes et Logistique</span></h3><ul><li>Jour 1-2 : Mise en place du système de gestion des commandes.</li><li>Jour 3-4 : Intégration de solutions logistiques et suivi des expéditions.</li><li>Jour 5-7 : Gestion des retours et service client dans le contexte e-commerce.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 6 : Expérience Utilisateur et Conception Responsive</span></h3><ul><li>Jour 1-2 : Optimisation de l''expérience utilisateur.</li><li>Jour 3-4 : Conception responsive et adaptation à différents appareils.</li><li>Jour 5-7 : Tests d''usabilité et amélioration continue de l''interface utilisateur.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 7 : Stratégie Marketing et Promotion en Ligne</span></h3><ul><li>Jour 1-2 : Élaboration de stratégies de marketing en ligne pour les sites e-commerce.</li><li>Jour 3-4 : Utilisation des médias sociaux et mise en place de campagnes publicitaires.</li><li>Jour 5-7 : Analyses de données et optimisation des stratégies marketing.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 8 : Sécurité et Conformité Réglementaire</span></h3><ul><li>Jour 1-2 : Sécurisation du cadre e-commerce contre les attaques.</li><li>Jour 3-4 : Conformité aux réglementations en matière de protection des données.</li><li>Jour 5-7 : Planification de la reprise après sinistre et protection de la confidentialité des clients.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 9 : Tests et Déploiement en Production</span></h3><ul><li>Jour 1-2 : Tests de performance et de charge.</li><li>Jour 3-4 : Procédures de déploiement en production.</li><li>Jour 5-7 : Surveillance continue et résolution des problèmes en temps réel.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 10 : Projets Pratiques et Évaluation Finale</span></h3><ul><li>Jour 1-5 : Travaux pratiques sur des projets e-commerce réels. Présentation des projets finaux et évaluation.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 11 : Conclusion et Perspectives</span></h3><ul><li>Jour 1-3 : Récapitulation de la formation et discussions sur les opportunités futures. Conseils pour la continuation de l''apprentissage et exploration avancée du commerce électronique.</li></ul>",
        150, 4, 2000 ,"2024-01-07"),

       ("Comptabilité",
        "Objectifs de la Formation :

    Compréhension des Fondamentaux : Vous plongerez dans les principes de base de la comptabilité, explorant le langage
    financier et maîtrisant les notions de débit, crédit, actif, passif et plus encore.
    Normes Comptables Internationales : Vous vous familiariserez avec les normes comptables internationales,
    apprenant à les appliquer dans des situations réelles pour assurer la conformité et la transparence financière.
    Pratique des Logiciels Comptables : La formation inclura des sessions pratiques où vous maîtriserez
    l''utilisation des logiciels comptables modernes, vous permettant d''automatiser des processus et de gagner en efficacité.
    ",

        " <h3><span style=\"color: var(--tw-prose-bold);\">Module 1: Introduction à la Comptabilité (Parties 1-2)</span></h3><ul><li>Séance 1 : Les Fondamentaux de la Comptabilité</li><li class=\"ql-indent-1\">Définition et objectifs de la comptabilité</li><li class=\"ql-indent-1\">Les principes de base : débit, crédit, actif, passif</li><li>Séance 2 : Structure des États Financiers</li><li class=\"ql-indent-1\">Bilan, compte de résultat, tableau des flux de trésorerie</li><li class=\"ql-indent-1\">Lecture et interprétation des états financiers</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Module 2: Normes Comptables et Législation (Parties 3-4)</span></h3><ul><li>Séance 3 : Normes Comptables Internationales (IFRS)</li><li class=\"ql-indent-1\">Principes fondamentaux</li><li class=\"ql-indent-1\">Application pratique des normes</li><li>Séance 4 : Législation Comptable Nationale</li><li class=\"ql-indent-1\">Conformité légale et réglementaire</li><li class=\"ql-indent-1\">Impacts des changements de normes</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Module 3: Logiciels Comptables (Parties 5-6)</span></h3><ul><li>Séance 5 : Utilisation de Logiciels Comptables Modernes</li><li class=\"ql-indent-1\">Formation pratique sur des logiciels courants</li><li class=\"ql-indent-1\">Automatisation des processus comptables</li><li>Séance 6 : Analyse des Données Comptables</li><li class=\"ql-indent-1\">Utilisation d''outils pour l''analyse financière</li><li class=\"ql-indent-1\">Prise de décision basée sur les données</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Module 4: Fiscalité des Entreprises (Parties 7-8)</span></h3><ul><li>Séance 7 : Principes Fondamentaux de la Fiscalité des Entreprises</li><li class=\"ql-indent-1\">Concepts de base en fiscalité</li><li class=\"ql-indent-1\">Calcul des obligations fiscales</li><li>Séance 8 : Gestion Fiscale et Optimisation</li><li class=\"ql-indent-1\">Stratégies pour minimiser la charge fiscale</li><li class=\"ql-indent-1\">Gestion des déclarations fiscales</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Module 5: Gestion Budgétaire (Parties 9-10)</span></h3><ul><li>Séance 9 : Planification Budgétaire</li><li class=\"ql-indent-1\">Élaboration de budgets prévisionnels</li><li class=\"ql-indent-1\">Allocation des ressources financières</li><li>Séance 10 : Suivi et Analyse Budgétaire</li><li class=\"ql-indent-1\">Techniques de suivi des budgets</li><li class=\"ql-indent-1\">Analyse des écarts et ajustements</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Module 6: Éthique en Comptabilité (Partie 11)</span></h3><ul><li class=\"ql-indent-1\">Séance 11 : Principes Éthiques en ComptabilitéConfidentialité, intégrité, responsabilité</li><li class=\"ql-indent-1\">Études de cas éthiques</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\"><span class=\"ql-cursor\">﻿</span>Module 7: Compétences en Communication (Partie 12)</span></h3><ul><li class=\"ql-indent-1\">Séance 12 : Communication des Informations FinancièresTechniques de communication pour les professionnels de la comptabilité</li><li class=\"ql-indent-1\">Présentation de rapports financiers.</li></ul><p><br></p>",
        200, 5, 3000 ,"2023-02-11"),

       ("Formation Machine Learning",
        "Compréhension des concepts fondamentaux :
    Comprendre les principes de base de l''apprentissage automatique, y compris la différence entre l''apprentissage supervisé, non supervisé et par renforcement.
    Maîtriser les concepts de base tels que les ensembles d''entraînement, les ensembles de validation et les ensembles de test.
    Programmation et outils :
    Maîtriser au moins un langage de programmation couramment utilisé en machine learning, comme Python.
    Savoir utiliser des bibliothèques et des frameworks populaires tels que TensorFlow, PyTorch ou scikit-learn.
    Prétraitement des données :
    ",
        "
<h3><span style=\"color: var(--tw-prose-bold);\">Partie 1-2 : Introduction à l''Apprentissage Automatique</span></h3><ul><li>Jour 1-2: Introduction à l''apprentissage automatique, historique, et applications.</li><li>Jour 3-4: Comprendre les types d''apprentissage (supervisé, non supervisé, renforcement).</li><li>Jour 5-7: Concepts de base, ensembles d''entraînement, de validation et de test.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 3-4 : Programmation en Python et Outils de Machine Learning</span></h3><ul><li>Jour 1-2: Introduction à Python pour le machine learning.</li><li>Jour 3-4: Utilisation de bibliothèques populaires comme NumPy, pandas, et matplotlib.</li><li>Jour 5-7: Introduction à scikit-learn, prétraitement des données.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 5-6 : Modèles d''Apprentissage Supervisé</span></h3><ul><li>Jour 1-2: Régression linéaire et logistique.</li><li>Jour 3-4: Arbres de décision et forêts aléatoires.</li><li>Jour 5-7: Machines à vecteurs de support (SVM) et k-plus proches voisins (k-NN).</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 7-8 : Modèles d''Apprentissage Non Supervisé</span></h3><ul><li>Jour 1-2: Clustering (k-means, clustering hiérarchique).</li><li>Jour 3-4: Analyse en composantes principales (PCA) et t-distributed Stochastic Neighbor Embedding (t-SNE).</li><li>Jour 5-7: Introduction à l''apprentissage non supervisé et semi-supervisé.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 9-10 : Évaluation des Modèles et Prévention du Surapprentissage</span></h3><ul><li>Jour 1-2: Métriques d''évaluation (précision, rappel, F-mesure).</li><li>Jour 3-4: Validation croisée et hyperparamètres.</li><li>Jour 5-7: Prévention du surapprentissage (régularisation, dropout).</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 11-12 : Modèles Avancés et Interprétabilité</span></h3><ul><li>Jour 1-2: Réseaux de neurones et deep learning.</li><li>Jour 3-4: Techniques d''interprétabilité (LIME, SHAP).</li><li>Jour 5-7: Applications pratiques en vision par ordinateur et traitement du langage naturel.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 13-14 : Déploiement et Éthique</span></h3><ul><li>Jour 1-2: Déploiement de modèles (Flask, Docker).</li><li>Jour 3-4: Gestion des mises à jour et scalabilité.</li><li>Jour 5-7: Considérations éthiques et responsabilité en machine learning.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 15 : Projets Pratiques et Études de Cas</span></h3><ul><li>Jour 1-5: Travaux pratiques sur des projets réels, avec des retours réguliers.</li><li>Présentation de projets finaux.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 16 : Veille Technologique et Conclusion</span></h3><ul><li>Jour 1-3: Revue des tendances actuelles en machine learning.</li><li>Jour 4-5: Récapitulation de la formation, discussions sur les opportunités futures.</li></ul>",
        120, 1, 1500 ,"2022-03-07"),

       ("Formation HTML, CSS, JavaScript",
        "Le but de cette formation est de fournir aux participants les compétences nécessaires pour concevoir, développer
        et améliorer des sites web interactifs et attrayants. Les participants apprendront à utiliser les langages
        de base du développement web, à savoir HTML pour la structure, CSS pour la mise en page et le style, et
        JavaScript pour l''interactivité,
        afin de créer des expériences utilisateur dynamiques.",
        "
   <h3><span style=\"color: var(--tw-prose-bold);\">Partie 1 : Introduction au Développement Web et HTML</span></h3><ul><li>Jour 1-2: Introduction au web et à son fonctionnement.</li><li>Jour 3-4: Structure de base d''un document HTML.</li><li>Jour 5-7: Balises HTML, liens, images et formulaires.</li><li><br></li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 2 : Mise en Forme avec CSS</span></h3><ul><li>Jour 1-2: Introduction à CSS, sélecteurs et propriétés de base.</li><li>Jour 3-4: Mise en page, box model, et positionnement.</li><li>Jour 5-7: Flexbox et Grid pour des mises en page avancées.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 3 : Introduction à JavaScript</span></h3><ul><li>Jour 1-2: Fondamentaux de JavaScript, variables, types de données.</li><li>Jour 3-4: Structures de contrôle (boucles, conditions).</li><li>Jour 5-7: Fonctions, tableaux et objets en JavaScript.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 4 : Manipulation du DOM avec JavaScript</span></h3><ul><li>Jour 1-2: Introduction au Document Object Model (DOM).</li><li>Jour 3-4: Modification du DOM avec JavaScript.</li><li>Jour 5-7: Gestion des événements et interactions utilisateur.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 5 : Création d''Applications Web Simples</span></h3><ul><li>Jour 1-2: Utilisation d''HTML, CSS et JavaScript ensemble.</li><li>Jour 3-4: Création d''un formulaire interactif.</li><li>Jour 5-7: Validation de formulaire avec JavaScript.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 6 : AJAX et Communication Asynchrone</span></h3><ul><li>Jour 1-2: Introduction à AJAX et requêtes asynchrones.</li><li>Jour 3-4: Traitement de données JSON.</li><li>Jour 5-7: Utilisation d''APIs pour récupérer des données.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 7 : Introduction aux Frameworks et Bibliothèques JavaScript</span></h3><ul><li>Jour 1-2: Vue d''ensemble de bibliothèques populaires (jQuery, Bootstrap).</li><li>Jour 3-4: Introduction à un framework front-end comme React ou Angular.</li><li>Jour 5-7: Utilisation de composants et création d''une application simple.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 8 : Optimisation et Débogage</span></h3><ul><li>Jour 1-2: Outils de développement dans les navigateurs.</li><li>Jour 3-4: Techniques de débogage et amélioration des performances.</li><li>Jour 5-7: Tests unitaires simples et bonnes pratiques.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 9 : Responsive Web Design</span></h3><ul><li>Jour 1-2: Concepts de base du responsive design.</li><li>Jour 3-4: Media queries et flexibilité des mises en page.</li><li>Jour 5-7: Adaptation d''une application pour différentes tailles d''écrans.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\">Partie 10 : Projets Pratiques et Évaluation Finale</span></h3><ul><li>Jour 1-5: Travaux pratiques sur des projets concrets.</li><li>Présentation de projets finaux et évaluation.</li></ul><p><br></p><h3><span style=\"color: var(--tw-prose-bold);\"><span class=\"ql-cursor\">﻿</span>Partie 11 : Conclusion et Perspectives</span></h3><ul><li>Jour 1-3: Récapitulation de la formation et discussion sur les opportunités futures.</li><li>Conseils pour la poursuite de l''apprentissage.</li></ul><p><br></p>",
        92, 2, 700,"2021-08-10" )
;

INSERT INTO ENTREPRISE (address, email, nom, tel, url, image)
VALUES
    ('123 Avenue Hassan II, Casablanca, Maroc', 'contact@entreprise1.ma', 'Entreprise 1 SARL', '+212612345678', 'http://www.entreprise1.ma', 'logo1.jpg'),
    ('789 Rue Mohammed V, Rabat, Maroc', 'info@entreprise2.ma', 'Société Marocaine 2', '+212621234567', 'http://www.entreprise2.ma', 'logo2.jpg'),
    ('456 Boulevard Mohamed VI, Marrakech, Maroc', 'contact@entreprise3.ma', 'Services Marocains 3', '+212631234567', 'http://www.entreprise3.ma', 'logo3.jpg'),
    ('101 Rue Gueliz, Agadir, Maroc', 'info@entreprise4.ma', 'Agadir Entreprises SARL', '+212641234567', 'http://www.entreprise4.ma', 'logo4.jpg'),
    ('321 Avenue Al Massira, Tanger, Maroc', 'contact@entreprise5.ma', 'Tanger Entreprises SA', '+212651234567', 'http://www.entreprise5.ma', 'logo5.jpg'),
    ('555 Rue Mohammed Zerktouni, Fès, Maroc', 'info@entreprise6.ma', 'Fès Services Ltd.', '+212661234567', 'http://www.entreprise6.ma', 'logo6.jpg'),
    ('789 Boulevard Moulay Ismail, Oujda, Maroc', 'contact@entreprise7.ma', 'Oujda Entreprises SARL', '+212671234567', 'http://www.entreprise7.ma', 'logo7.jpg');

INSERT INTO categorie (nom) VALUES
                                ('Informatique et Technologie'),
                                ('Business et Entrepreneuriat'),
                                ('Marketing Digital et E-commerce'),
                                ('Comptabilité Financière et Gestion'),
                                ('Sciences et Éducation');
