AGENTS.md — Hover

1. Mission du projet

Hover est une plateforme sociale et professionnelle destinée aux passionnés de technologie, des débutants aux utilisateurs expérimentés.

Elle permet aux membres de :

- Découvrir des personnes partageant leurs intérêts technologiques.
- Publier des contenus, des questions et des ressources.
- Suivre d'autres membres.
- Échanger par messagerie privée en temps réel.
- Créer et rejoindre des communautés publiques ou privées.
- Présenter leurs projets dans leur profil.
- Découvrir ultérieurement des recommandations personnalisées grâce à l'IA.

Hover doit favoriser l'apprentissage, la collaboration, les opportunités professionnelles et les relations sociales dans un environnement respectueux et sécurisé.

2. Règles de priorité

En cas de conflit, respecter cet ordre :

1. Sécurité, confidentialité et protection des utilisateurs.
2. Demandes explicites du propriétaire du projet.
3. Architecture et conventions déjà établies dans le dépôt.
4. Fonctionnalités et exigences définies dans ce document.
5. Simplicité, maintenabilité, accessibilité et performance.

Ne pas inventer des exigences produit lorsqu'une décision importante reste inconnue. Présenter une recommandation argumentée et attendre l'accord du propriétaire avant de poursuivre sur ce point.

3. Première action obligatoire : inspecter le dépôt

Avant toute modification :

1. Examiner les fichiers et dossiers existants.
2. Lire le "package.json", les fichiers de configuration et la documentation.
3. Identifier les versions de Next.js, React, TypeScript et des dépendances installées.
4. Comprendre l'organisation des pages, des composants, des fonctionnalités et des services.
5. Examiner la configuration Supabase, les migrations existantes, les politiques RLS et les tests disponibles.
6. Identifier les fonctionnalités déjà opérationnelles et les problèmes connus.
7. Vérifier l'état Git et les modifications locales afin de ne pas écraser le travail existant.
8. Présenter un diagnostic synthétique et un plan d'action avant d'entreprendre une tâche importante.

Ne jamais supposer que le dépôt est vide. Ne pas remplacer une architecture existante simplement parce qu'une autre organisation est possible.

Si un refactoring important, une suppression, une migration risquée ou une modification architecturale majeure paraît nécessaire, expliquer les raisons, les avantages, les risques et les alternatives, puis attendre l'accord du propriétaire.

4. Stack technique

Stack cible :

- Frontend : Next.js avec App Router si cela convient à l'architecture existante.
- Langage : TypeScript en mode strict.
- Interface : Tailwind CSS, shadcn/ui et composants personnalisés lorsque nécessaire.
- Backend et base de données : Supabase.
- Authentification : Supabase Auth, avec e-mail vérifié et connexion Google.
- Messagerie en temps réel : privilégier Supabase Realtime.
- Internationalisation : "next-intl".
- Validation : privilégier Zod lorsque cela convient aux besoins.
- PWA : expérience installable et cache limité aux ressources appropriées.
- Tests : outils déjà installés, complétés si nécessaire avec une solution adaptée et approuvée.

Respecter les versions et les conventions du dépôt. Vérifier la compatibilité avant de proposer une mise à niveau.

Ne pas ajouter une bibliothèque lorsqu'une fonctionnalité native de JavaScript, React ou Next.js suffit.

Demander l'accord avant d'ajouter une nouvelle dépendance et expliquer :

- Le besoin qu'elle résout.
- Les solutions alternatives.
- Son coût éventuel.
- Ses implications en matière de sécurité et de maintenance.

Privilégier les solutions gratuites et open source lorsque cela convient, sans supposer qu'un service gratuit le restera indéfiniment.

5. Architecture et organisation du code

Privilégier une organisation hybride, par fonctionnalité et par type de responsabilité.

L'organisation exacte doit être adaptée au dépôt après inspection.

Séparer clairement :

- Les pages et layouts.
- Les composants d'interface réutilisables.
- Les fonctionnalités métier.
- Les schémas de validation et les types.
- Les services d'accès aux données.
- Les clients Supabase côté serveur et côté navigateur.
- Les contrôles d'authentification et d'autorisation.
- Les utilitaires partagés.
- Les traductions.
- Les tests et migrations.

Principes obligatoires :

- Garder les composants lisibles et raisonnablement petits.
- Éviter la duplication de logique.
- Préférer des fonctions et composants réutilisables lorsqu'ils ont une responsabilité claire.
- Ne pas introduire de couche d'abstraction inutile.
- Éviter les fichiers monolithiques.
- Ne pas utiliser "any" sans justification exceptionnelle.
- Typer les entrées, les sorties et les données métier.
- Éviter de placer des secrets ou des contrôles de sécurité uniquement dans le code client.

Utiliser les Server Components par défaut lorsque c'est approprié. Réserver les Client Components aux interactions qui en ont besoin.

Employer les Server Actions et les Route Handlers selon leur usage, en validant les entrées et en vérifiant les autorisations côté serveur.

6. Identité visuelle et expérience utilisateur

Hover doit posséder une identité originale, moderne, lumineuse et cohérente.

Ne pas reproduire à l'identique le design, la marque ou l'interface d'une autre plateforme.

Direction visuelle

- Thème clair privilégié.
- Interface aérée, lisible et accueillante.
- Hiérarchie visuelle nette.
- Typographie cohérente.
- Espacements réguliers.
- Couleurs et composants harmonisés.
- Animations discrètes et utiles.
- États interactifs explicites.
- Contraste suffisant.
- Responsive design sur mobile, tablette et ordinateur.

La palette exacte, les polices et les détails graphiques pourront être proposés sous forme de recommandation ou de prototype avant leur adoption.

Navigation

- Sur ordinateur : navigation latérale adaptée au contenu.
- Sur mobile : navigation inférieure adaptée aux usages principaux.
- Éviter de surcharger les menus.
- Préserver l'accès aux réglages et aux fonctions de sécurité.

États obligatoires de l'interface

Prévoir, lorsque pertinent :

- Un état de chargement.
- Un état vide avec une explication et une action utile.
- Un état d'erreur avec un message compréhensible et une possibilité de réessayer.
- Une confirmation après une action réussie.
- Des états désactivés explicites.
- Une expérience adaptée aux connexions lentes.

Ne jamais présenter une action comme réussie avant que son résultat ait été confirmé.

7. Fonctionnalités et périmètre du MVP

Développer par phases. Ne pas tenter de construire toute la plateforme en une seule opération.

Phase 1 — Fondations

- Inspection et compréhension du dépôt.
- Architecture et conventions.
- Identité visuelle de base.
- Configuration des environnements.
- Configuration Supabase.
- Schéma de données initial.
- Internationalisation française et anglaise.
- Socle de tests et de qualité.

Phase 2 — Authentification et profils

- Inscription et connexion par e-mail.
- Vérification de l'adresse e-mail.
- Connexion Google.
- Déconnexion et gestion de session.
- Parcours guidé de création du profil.
- Nom, nom d'utilisateur, biographie et photo selon les besoins.
- Compétences, technologies maîtrisées ou en cours d'apprentissage.
- Centres d'intérêt.
- Liens professionnels facultatifs, dont GitHub.
- Présentation des projets directement dans le profil.
- Contrôle des informations visibles.
- Protection des pages et données privées.

Phase 3 — Fil d'actualité

- Publications.
- Questions.
- Partage de ressources.
- Présentation des projets au moyen de publications.
- Consultation du fil.
- Likes.
- Commentaires.
- Partage.
- Enregistrement des publications.
- Recherche simple par nom et mots-clés lorsque pertinente.

Prévoir des contrôles de validation, des états de chargement, des états vides et une gestion correcte des erreurs.

Phase 4 — Communautés

- Communautés publiques et privées.
- Création et consultation des communautés.
- Liste des membres.
- Rôles et permissions.
- Demandes d'adhésion aux communautés privées.
- Chat de communauté.
- Modération des contenus et des membres.
- Contrôle des accès côté serveur et dans la base de données.

Phase 5 — Messagerie privée

- Conversations entre membres.
- Envoi et réception des messages.
- Actualisation en temps réel via Supabase Realtime.
- Vérification de l'identité et des permissions des participants.
- États de chargement, erreurs et envoi confirmé.
- Blocage et signalement des utilisateurs.
- Protection des messages privés contre les accès non autorisés.

Ne pas exposer les messages privés dans le fil public, les recommandations IA ou les journaux de diagnostic.

Phase 6 — Sécurité, modération et préparation à l'ouverture

- Signalement des profils, publications et messages.
- Blocage des membres.
- Rôles membre, modérateur et administrateur.
- Tableau de bord réservé aux administrateurs.
- Traitement des signalements.
- Mesures anti-spam et limites de fréquence adaptées.
- Contrôles d'accès et tests de sécurité.
- Suppression de compte documentée.
- Vérification des parcours critiques avant toute ouverture publique.

La modération et les protections doivent être prises en compte dès la conception, même si leurs interfaces sont développées progressivement.

Phase 7 — PWA et finalisation

- Installation de l'application si le navigateur la prend en charge.
- Icône et métadonnées adaptées.
- Écran de lancement lorsque pris en charge.
- Cache de certaines ressources et pages appropriées.
- Page hors ligne claire.
- Possibilité de relancer le chargement.
- Vérification des parcours sur mobile et ordinateur.
- Préparation de l'architecture pour d'éventuelles notifications push ultérieures.

Les notifications push et les recommandations intelligentes sont reportées après le MVP.

Ne pas mettre en place un cache hors ligne qui pourrait exposer des données privées sur un appareil partagé. Ne pas mettre en cache les réponses privées ou sensibles sans une stratégie explicite et sécurisée.

8. Authentification, autorisation et sécurité

La sécurité est une exigence fondamentale du projet.

Authentification

- Utiliser Supabase Auth.
- Vérifier les sessions côté serveur lorsque nécessaire.
- Protéger les pages et actions privées.
- Traiter correctement les erreurs d'authentification.
- Ne jamais faire confiance à un identifiant ou à un rôle transmis uniquement par le client.

Autorisation

- Vérifier les droits pour chaque opération sensible.
- Séparer les permissions des membres, modérateurs et administrateurs.
- Vérifier les permissions dans les opérations serveur et les politiques de base de données.
- Ne jamais considérer le masquage d'un bouton comme un contrôle de sécurité.
- Empêcher un utilisateur d'accéder aux données d'un autre sans autorisation.

Supabase et RLS

- Activer et configurer les politiques Row Level Security sur les tables exposées qui contiennent des données utilisateur ou sensibles.
- Appliquer le principe du moindre privilège.
- Tester les lectures et écritures autorisées et interdites.
- Vérifier les accès aux conversations, communautés privées, profils et fonctions d'administration.
- Prévoir des migrations SQL versionnées, révisables et reproductibles.
- Ne jamais appliquer une modification de schéma à la production sans accord explicite.

Ne jamais exposer une clé secrète Supabase, une clé de service ou un secret serveur dans le navigateur, dans Git, dans les logs ou dans une réponse destinée à l'utilisateur.

Les clés publiques prévues pour un usage client ne dispensent jamais d'une configuration correcte de RLS et des autorisations.

Validation

- Valider les données côté serveur, même si le formulaire est déjà validé côté client.
- Utiliser des schémas de validation cohérents.
- Vérifier les identifiants, les rôles et les ressources demandées.
- Traiter les erreurs sans divulguer de détails internes.
- Protéger les opérations sensibles contre les abus et les requêtes répétées.

Journalisation

- Ne pas enregistrer de mots de passe, jetons, clés, contenus privés ou données personnelles inutiles.
- Préférer des messages de diagnostic minimaux et utiles.
- Ne jamais utiliser les logs comme mécanisme d'autorisation.

9. Confidentialité et protection des membres

Adopter une approche de minimisation des données.

- Collecter uniquement les informations nécessaires.
- Rendre les champs facultatifs lorsque cela est possible.
- Protéger les profils contre les visiteurs non connectés, conformément aux exigences du produit.
- Permettre aux membres de contrôler la visibilité des informations et certaines interactions.
- Ne pas exposer les données privées par les API, les requêtes, les caches ou les composants client.
- Documenter le parcours de suppression de compte et les données concernées.
- Ne pas utiliser les conversations privées pour les recommandations IA.
- Si des recommandations sont ajoutées ultérieurement, limiter les données utilisées aux compétences, centres d'intérêt et projets visibles et autorisés.

Tenir compte des règles applicables aux utilisateurs de 13 ans et plus, de la protection des mineurs et des obligations légales pertinentes avant l'ouverture publique. Ne pas présumer qu'une seule règle d'âge ou de consentement convient à toutes les juridictions.

10. Rôles et administration

Prévoir au minimum les rôles suivants :

- Membre : utilise les fonctionnalités auxquelles il a droit.
- Modérateur : modère les espaces qui lui sont attribués selon ses permissions.
- Administrateur : accède aux fonctions globales d'administration autorisées.

Le rôle d'administrateur ne doit jamais être accordé par une simple modification du client.

Le tableau de bord d'administration doit être protégé côté serveur et au niveau des données. Les actions sensibles doivent être contrôlées, validées et, lorsque pertinent, journalisées sans données confidentielles inutiles.

11. Internationalisation

Utiliser "next-intl" pour les contenus localisés.

Langues initiales :

- Français.
- Anglais.

Règles :

- Ne pas disperser les textes de l'interface directement dans les composants lorsque leur traduction est nécessaire.
- Utiliser des clés de traduction cohérentes.
- Prévoir des traductions pour les messages d'erreur, états vides, formulaires, notifications et confirmations.
- Éviter les concaténations de phrases qui compliquent la traduction.
- Respecter les conventions déjà présentes dans le dépôt.
- Utiliser le français pour la documentation et les explications destinées au propriétaire.
- Utiliser l'anglais pour les identifiants techniques, noms de fonctions, variables et conventions de code.

12. Accessibilité et responsive design

Appliquer les bonnes pratiques d'accessibilité :

- HTML sémantique.
- Navigation au clavier.
- Labels explicites pour les champs.
- Textes alternatifs utiles pour les images informatives.
- Contrastes suffisants.
- États de focus visibles.
- Boutons et liens compréhensibles.
- Messages d'erreur associés aux champs concernés.
- Dialogues et menus utilisables au clavier.
- Respect des préférences de réduction des animations lorsque pertinent.

Vérifier l'interface sur des largeurs d'écran variées et éviter les interactions qui ne fonctionnent qu'au survol.

13. Qualité du code et tests

Avant de terminer une tâche, lancer les vérifications pertinentes disponibles dans le dépôt :

1. Lint.
2. Vérification TypeScript.
3. Tests pertinents pour les modifications.
4. Build de production.

Identifier les commandes réelles à partir du "package.json" et de la configuration. Ne pas inventer des scripts qui n'existent pas.

Ajouter ou mettre à jour les tests pour les comportements modifiés, notamment les permissions, la validation et les cas d'erreur.

Tester en priorité :

- L'authentification et les sessions.
- Les autorisations par rôle.
- Les politiques RLS.
- Les conversations privées.
- Les communautés privées.
- Le signalement et le blocage.
- Les opérations d'administration.
- Les formulaires et leurs erreurs.
- Les parcours essentiels du MVP.

Si une vérification ne peut pas être exécutée, expliquer précisément pourquoi. Ne jamais affirmer qu'un test, un build ou une migration a réussi sans résultat confirmant cette réussite.

14. Git et gestion des modifications

- Examiner l'état Git avant de commencer.
- Préserver les modifications locales du propriétaire.
- Ne pas réinitialiser, écraser ou supprimer le travail existant sans autorisation.
- Les commits locaux sont autorisés.
- Aucun push sans accord explicite.
- Ne pas effectuer de déploiement ou de modification distante sans accord.
- Expliquer les changements importants avant de les appliquer.
- Préférer des modifications ciblées et faciles à réviser.

15. Variables d'environnement et configuration

- Lire les conventions de configuration déjà en place.
- Documenter les variables nécessaires dans le README et dans ".env.example".
- Utiliser des valeurs fictives ou des placeholders dans ".env.example".
- Ne jamais recopier une véritable clé ou un véritable secret dans la documentation.
- Vérifier les variables obligatoires et expliquer comment les obtenir.
- Ne pas supposer que les secrets sont disponibles.
- Si une variable manque, expliquer ce qui manque plutôt que d'inventer une valeur.

16. Documentation

Maintenir un README compréhensible contenant, selon l'état du projet :

- Présentation de Hover.
- Fonctionnalités disponibles et limites connues.
- Prérequis.
- Installation.
- Configuration des variables d'environnement.
- Configuration de Supabase.
- Commandes de développement.
- Commandes de lint, de vérification TypeScript, de tests et de build.
- Procédure de lancement.
- Informations utiles pour contribuer ou poursuivre le développement.

Mettre la documentation à jour lorsque les commandes, la configuration ou les fonctionnalités changent.

Ne pas prétendre qu'une fonctionnalité est terminée si elle n'est que partiellement implémentée.

17. Méthode de travail obligatoire

Pour chaque tâche significative :

1. Analyser : comprendre le besoin, inspecter le code et identifier les contraintes.
2. Planifier : proposer une solution, les fichiers concernés, les risques et les vérifications.
3. Obtenir l'accord : pour les décisions importantes, les dépendances, les changements risqués, les opérations distantes et les coûts.
4. Développer : implémenter de manière progressive, lisible et cohérente avec l'architecture.
5. Tester : exécuter les vérifications pertinentes et corriger les problèmes introduits.
6. Vérifier : examiner les modifications finales et leurs implications en matière de sécurité.
7. Résumer : expliquer les résultats et les étapes restantes.

Pour une modification simple et sans risque, éviter les formalités inutiles. Pour une décision importante ou ambiguë, proposer une recommandation argumentée et attendre l'accord du propriétaire.

Ne jamais interpréter l'absence d'une réponse comme une autorisation pour une opération risquée.

18. Format du compte rendu final

À la fin de chaque tâche significative, fournir un compte rendu détaillé comprenant :

- Objectif : ce qui a été demandé.
- Modifications : résumé des changements effectués.
- Fichiers : principaux fichiers créés ou modifiés.
- Décisions techniques : choix effectués et raisons.
- Vérifications : commandes réellement exécutées et résultats.
- Sécurité : contrôles pertinents effectués et points restant à vérifier.
- Limites : problèmes non résolus, dépendances manquantes ou vérifications impossibles.
- Prochaines étapes : recommandations pour continuer.

Distinguer clairement les tâches terminées, partiellement terminées et non réalisées.

19. Règle finale

Privilégier une Hover sécurisée, utile, accessible, maintenable et cohérente plutôt qu'une accumulation rapide de fonctionnalités.

Ne pas ajouter de fonctionnalités hors périmètre, ne pas inventer les résultats des tests, ne pas exposer les données des utilisateurs et ne pas entreprendre d'action risquée sans autori