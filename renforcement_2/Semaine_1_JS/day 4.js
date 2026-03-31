// ## Brief

// Tu es développeur dans une startup. On te demande de créer le prototype d'une marketplace de produits d'occasion en JavaScript (console).

// ## Fonctionnalités

// **1. Gestion des utilisateurs (2 pts)**

// La marketplace a des vendeurs et des acheteurs. Chaque utilisateur a : un id, un pseudo, un email, un rôle (vendeur/acheteur), une note moyenne, un solde (porte-monnaie virtuel). Crée au moins 5 utilisateurs.

// **2. Gestion des annonces (4 pts)**

// Un vendeur peut publier une annonce : id, vendeur_id, titre, description, prix, categorie (Électronique, Vêtement, Meuble, Sport, Autre), etat (neuf, très bon, bon, acceptable), statut (disponible, vendu, réservé), date_publication. Fonctions : publier une annonce (vérifier que l'utilisateur est vendeur), modifier le prix, retirer une annonce.

// **3. Recherche et filtrage (4 pts)**

// Fonctions de recherche : par mot-clé dans le titre et la description, par catégorie, par tranche de prix (min/max), par état, par vendeur. Les filtres doivent être combinables (ex: catégorie "Électronique" ET prix < 100€ ET état "très bon"). Tri par : prix, date de publication, note du vendeur.

// **4. Système d'achat (4 pts)**

// Un acheteur peut acheter une annonce : vérifier que l'annonce est disponible, vérifier que l'acheteur a un solde suffisant, déduire le montant du solde de l'acheteur, ajouter le montant au solde du vendeur (moins 5% de commission), passer l'annonce en "vendu". Historique des transactions (date, acheteur, vendeur, annonce, montant, commission).

// **5. Système d'avis (3 pts)**

// Après un achat, l'acheteur peut noter le vendeur (1 à 5) avec un commentaire. Un acheteur ne peut noter un vendeur qu'une seule fois par transaction. La note moyenne du vendeur est recalculée automatiquement. Afficher le profil d'un vendeur : pseudo, note moyenne, nombre de ventes, avis reçus.

// **6. Statistiques de la marketplace (3 pts)**

// Nombre total d'annonces (par statut), chiffre d'affaires total (somme des ventes), commission totale collectée, top 3 vendeurs par note, catégorie la plus populaire (en nombre d'annonces), prix moyen par catégorie.

// ## Barème : /20

// Structure et données : /2 | Annonces CRUD : /4 | Recherche/filtres : /4 | Achat + solde : /4 | Avis + notation : /3 | Statistiques : /3

// ## Challenges weekend (si non validé)

// **Challenge 1** : Crée un gestionnaire d'annonces simplifié : CRUD sur les annonces, 1 filtre par catégorie, 1 tri par prix.

// **Challenge 2** : 5 katas Codewars niveau 7 sur la manipulation de tableaux d'objets.


