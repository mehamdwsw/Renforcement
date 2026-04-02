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

// // **1. Gestion des utilisateurs (2 pts)**
let users = [
  {
    id: 1,
    nom: "mohamed",
    email: "mohamed@gmail.com",
    role: "vendeur",
    solde: 1000,
  },
  {
    id: 2,
    nom: "fir",
    email: "fir@gmail.com",
    role: "acheteur",
    solde: 150,
  },
  {
    id: 3,
    nom: "bkir",
    email: "bkir@gmail.com",
    role: "vendeur",
    solde: 5000,
  },
  {
    id: 4,
    nom: "bkir",
    email: "bkir@gmail.com",
    role: "vendeur",
    solde: 1000,
  },
  {
    id: 5,
    nom: "ahmed",
    email: "ahmed@gmail.com",
    role: "acheteur",
    solde: 10000,
  },
];
let annonces = [];
// **2. Gestion des annonces (4 pts)**
function publier_une_annonce(annonce) {
  let vendeur = false;

  users.forEach((element) => {
    if (element.id == annonce.vendeur_id && element.role == "vendeur") {
      vendeur = true;
    }
  });
  if (!vendeur) {
    return "no vendeur";
  }
  annonces.push(annonce);
}
function modifier_une_annonce(id, prix) {
  annonces.forEach((element) => {
    if (element.id == id) {
      element.prix = prix;
    }
  });
}
function supprimer_un_article(id) {
  annonces.forEach((element, i) => {
    if (element.id == id) {
      annonces.splice(i, 1);
    }
  });
}

let annonce = {
  id: 1,
  vendeur_id: 1,
  titre: "HY",
  description: "HUV HICV JDCFSDF UDFDS JSD SD",
  prix: 500,
  categorie: "Électronique",
  etat: "neuf",
  statut: "disponible",
  date_publication: "4/1/2026",
};
publier_une_annonce(annonce);
annonce = {
  id: 2,
  vendeur_id: 1,
  titre: "HY",
  description: "HUV HICV JDCFSDF UDFDS JSD SD",
  prix: 500,
  categorie: "Électronique",
  etat: "neuf",
  statut: "disponible",
  date_publication: "4/1/2026",
};

publier_une_annonce(annonce);
annonce = {
  id: 3,
  vendeur_id: 1,
  titre: "HY",
  description: "HUV HICV JDCFSDF UDFDS JSD SD",
  prix: 500,
  categorie: "Électronique",
  etat: "neuf",
  statut: "disponible",
  date_publication: "4/1/2026",
};
publier_une_annonce(annonce);
modifier_une_annonce(1, 8000);
console.log(
  "-//////////////////////////////////////////////////////////////////",
);
console.log(annonces);
supprimer_un_article(2);
console.log(
  "-//////////////////////////////////////////////////////////////////",
);

console.log(annonces);
// **3. Recherche et filtrage (4 pts)**

function Fonctions_de_recherche(string) {
  let risilta = [];
  risilta.push(annonces.filter((element) => element.titre == string));
  risilta.push(annonces.filter((element) => element.categorie == string));
  risilta.push(annonces.filter((element) => element.statut == string));
  risilta.push(annonces.filter((element) => element.titre == string));

  return risilta;
}
console.log(Fonctions_de_recherche("Électronique"));

// *4. Système d'achat (4 pts)
function indix_annonce(id_annonce) {
  let indix = -1;
  annonces.forEach((element, i) => {
    if (element.id == id_annonce) {
      indix = i;
    }
  });
  return indix;
}
function indix_user(user_id) {
  let b = -1;

  users.forEach((element, i) => {
    if (element.id == user_id) {
      b = i;
    }
  });
  return b;
}
function indix_vendeur(indix_annonce) {
  let indix_vendeur;
  if (indix_annonce == undefined) {
    return -1;
  }

  users.forEach((element, i) => {
    if (element.id == annonces[indix_annonce].vendeur_id) {
      indix_vendeur = i;
    }
  });
  return indix_vendeur;
}

function acheter_une_annonce(user_id, id_annonce) {
  let indix_annonc = indix_annonce(id_annonce);
  let indix_vendeu = indix_vendeur(indix_annonc);
  let indix_use = indix_user(user_id);
  //   console.log([indix_annonc,indix_vendeu,indix_use]);
let tot=users[indix_use].solde-annonces[indix_annonc].prix



  if ( tot  >= 0) {
    users[indix_use].solde -=annonces[indix_annonc].prix ;
    users[indix_vendeu].solde += annonces[indix_annonc].prix-annonces[indix_annonc].prix*0.05;
  }else{
    return 'no sold'
  }
  return [indix_annonc, indix_vendeu, indix_use];
}
let user = {
  id: 5,
  nom: "ahmed",
  email: "ahmed@gmail.com",
  role: "acheteur",
  solde: 500,
};

console.log("--------------------------");

console.log("--------------------------");
// console.log(acheter_une_annonce(1, 2));

publier_une_annonce({
  id: 3,
  vendeur_id: 4,
  titre: "HY",
  description: "HUV HICV JDCFSDF UDFDS JSD SD",
  prix: 500,
  categorie: "Électronique",
  etat: "neuf",
  statut: "disponible",
  date_publication: "4/1/2026",
});
console.log(annonces);
console.log(acheter_une_annonce(5, 1));
console.log(users);


// **5. Système d'avis (3 pts)**|
let achat=[];
function Après_un_achat(id_user,id_annonce){
    achat.push({
        commentaire:"hy",
        commentaire:"hy",
        commentaire:"hy",
        commentaire:"hy",
    })
}