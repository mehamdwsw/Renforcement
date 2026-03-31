// # 🔴 JEUDI — Renforcement : CRUD + Logique métier (1h)
// ## R-Challenge 7 — Le système de réservation de restaurant

// Tu développes le système de réservation d'un restaurant (30 places max).

// 1. Crée une structure pour gérer les réservations : chaque réservation a un id, un nom_client, un nombre_personnes, une date, une heure, un statut (confirmée, en attente, annulée) et un telephone
// 2. Fonction pour ajouter une réservation : vérifie que le nombre total de personnes pour ce créneau (date + heure) ne dépasse pas 30. Si c'est plein, mets la réservation en "en attente"
// 3. Fonction pour annuler une réservation : change le statut en "annulée" et vérifie s'il y a des réservations en attente pour ce créneau qui peuvent maintenant être confirmées
// 4. Fonction pour lister les réservations d'une date donnée, triées par heure
// 5. Fonction pour calculer le taux d'occupation d'une journée (nombre de places réservées / 30 par créneau)
// 6. Ajoute 8 réservations en testant les cas limites (créneau plein, annulation libérant une place)

// ---

let reservations = [
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 4,
    date: "3/29/2026",
    heure: "17:21",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 4,
    date: "3/29/2026",
    heure: "17:21",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 4,
    date: "3/29/2026",
    heure: "17:21",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 4,
    date: "3/29/2026",
    heure: "17:21",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 4,
    date: "3/20/2026",
    heure: "17:00",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 4,
    date: "3/20/2026",
    heure: "17:30",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 5,
    date: "3/21/2026",
    heure: "17:21",
    statut: "attente",
    telephone: 212615543618,
  },
  {
    id: 1,
    nom_client: "mohamed",
    nombre_personnes: 5,
    date: "3/22/2026",
    heure: "17:30",
    statut: "attente",
    telephone: 212615543618,
  },
];
// ----------------------------------------------------------------------
let reservation = {
  id: 1,
  nom_client: "mohamed",
  nombre_personnes: 1,
  date: "3/29/2026",
  heure: "17:21",
  statut: "",
  telephone: 212615543618,
};
function ajouter_une_réservation(reservation) {
  let total = 0;
  reservations.forEach((element) => {
    if (
      element.date == reservation.date &&
      element.heure == reservation.heure
    ) {
      total += element.nombre_personnes;
    }
  });
  if (total + reservation.nombre_personnes > 30) {
    reservation.statut = "attente";
    reservations.push(reservation);
    return "attente";
  } else {
    reservation.statut = "confirmée";
    reservations.push(reservation);
    return "confirmée";
  }
}
let b = ajouter_une_réservation(reservation);
console.log(b);
console.log(reservations);
function annuler_une_reservation(data, heure) {
  let total = 0;
  reservations.forEach((element) => {
    if (element.date == data && element.heure == heure) {
      element.statut = "annuler";
    }
  });
}
annuler_une_reservation("3/20/2026", "17:30");
console.log(reservations);
function lister_les_reservations(data, heure) {
  let reservations_data;
  if (heure == null) {
    let reservations_data = reservations.filter(
      (element) => element.date == data,
    );
    reservations_data.sort();
    console.log(111);
    return reservations_data;
  } else {
    let reservations_data = reservations.filter(
      (element) => element.date == data,
    );
    return reservations_data;
  }
}
console.log("-----------------------------------------------");
console.log(lister_les_reservations("3/20/2026"));

// ## R-Challenge 8 — Le panier e-commerce intelligent

// Tu développes la logique du panier d'un site e-commerce.

// 1. Le panier contient un tableau d'articles. Chaque article référence un produit (id, nom, prix, stock_disponible) et une quantité
// 2. Fonction pour ajouter un produit : si déjà dans le panier, augmente la quantité (sans dépasser le stock disponible). Si pas dans le panier, ajoute-le
// 3. Fonction pour modifier la quantité : vérifie que la nouvelle quantité ne dépasse pas le stock
// 4. Fonction pour supprimer un article du panier
// 5. Fonctions de calcul : sous-total par article (prix × quantité), total du panier, nombre total d'articles
// 6. Système de codes promo : "BIENVENUE" = -15% sur le premier achat, "NOEL2025" = -10€ si le total > 50€, "LIVGRATUITE" = -7€ (frais de livraison offerts). Un seul code applicable à la fois
// 7. Récapitulatif complet : chaque ligne, sous-total, remise (si code promo), frais de livraison (7€ gratuits si total > 100€), TVA (20%), total TTC

let panier = [
  {
    id: 142,
    nom: "pc win7",
    prix: 10000,
    stock_disponible: 100,
    quantite: 30,
  },
  {
    id: 111,
    nom: "pc win7",
    prix: 1000,
    stock_disponible: 100,
    quantite: 80,
  },
  {
    id: 11,
    nom: "pc win8",
    prix: 1000,
    stock_disponible: 100,
    quantite: 10,
  },
  {
    id: 10,
    nom: "pc win10",
    prix: 1000,
    stock_disponible: 100,
    quantite: 80,
  },
  {
    id: 3,
    nom: "pc win10",
    prix: 15000,
    stock_disponible: 50,
    quantite: 24,
  },
  {
    id: 2,
    nom: "pc win10",
    prix: 1500,
    stock_disponible: 20,
    quantite: 10,
  },
];
// 2. Fonction pour ajouter un produit : si déjà dans le panier, augmente la quantité (sans dépasser le stock disponible). Si pas dans le panier, ajoute-le
function ajouter_un_produit(item) {
  let test = true;
  panier.forEach((element) => {
    if (item.nom == element.nom) {
      let total = element.quantite + item.quantite;
      if (element.stock_disponible - total <= 0) {
        element.quantite = element.stock_disponible;
      } else {
        element.quantite += item.quantite;
      }
      test = false;
    }
  });
  if (test) {
    panier.push(item);
  }
}
console.log(panier);

console.log(
  "=====================================================================================>",
);
let item = {
  id: 2,
  nom: "pc win10",
  prix: 1600,
  stock_disponible: 5,
  quantite: 100,
};
modifier_la_quantite(item);

// 3. Fonction pour modifier la quantité : vérifie que la nouvelle quantité ne dépasse pas le stock
function modifier_la_quantite(item) {
  panier.forEach((element) => {
    if (item.nom == element.nom) {
      let total = element.quantite + item.quantite;
      if (element.stock_disponible - total <= 0) {
        element.quantite = element.stock_disponible;
      } else {
        element.quantite += item.quantite;
      }
    }
  });
}
// console.log(panier);
function supprimer_un_article(id) {
  panier.forEach((element, i) => {
    if (element.id == id) {
      panier.splice(i, 1);
    }
  });
}
supprimer_un_article(142);
console.log(panier);

function calcul() {
  let total = 0;
  panier.forEach((element) => {
    total += element.prix * element.quantite;
  });
  return total;
}
console.log(calcul());

// ## R-Challenge 9 — Le convertisseur de devises 🔥

// Tu crées un convertisseur multi-devises pour une application de finance.

// 1. Crée un objet contenant les taux de change par rapport à l'euro : USD (1.08), GBP (0.86), MAD (10.85), JPY (162.5), CAD (1.47)
// 2. Fonction `convertir(montant, deviseSource, deviseCible)` : convertit d'abord en euros puis dans la devise cible
// 3. Fonction `convertirPanier(panier, deviseSource, deviseCible)` : prend un tableau de prix dans une devise et retourne les prix convertis
// 4. Fonction `meilleurTaux(montant, deviseSource)` : affiche la valeur du montant dans TOUTES les devises disponibles
// 5. Historique des conversions : chaque conversion est stockée avec la date, les montants et les devises. Affiche l'historique
// 6. Statistiques : devise la plus demandée, montant total converti, conversion la plus fréquente

let contenant = [
  {
    nom: "USD",
    devise: 1.08,
  },
  {
    nom: "GBP",
    devise: 0.86,
  },
  {
    nom: "MAD",
    devise: 10.85,
  },
  {
    nom: "JPY",
    devise: 162.5,
  },
  {
    nom: "CAD",
    devise: 1.47,
  },
];

function convert(amount, sourceCurrency, targetCurrency) {
  contenant.forEach((element) => {
    if (sourceCurrency == element.nom) {
      amount = amount / element.devise;
    }
  });
  contenant.forEach((element) => {
    if (targetCurrency == element.nom) {
      amount = amount * element.devise;
    }
  });
  return amount;
}

let amount = 1000;
let sourceCurrency = "MAD";
let targetCurrency = "USD";

// convert(amount, sourceCurrency, targetCurrency)
// console.log(convert(amount, sourceCurrency, targetCurrency));
function convertCart(cart,sourceCurrency, targetCurrency) {
  let aray=[];
  cart.forEach(element => {
    aray.push(convert(element, sourceCurrency, targetCurrency));
  });
  return aray;
}

let cart = [550, 100, 800, 1000];

console.log(convertCart(cart, sourceCurrency, targetCurrency));


function bestRate(amount, sourceCurrency){
  
  contenant.forEach(element => {
    
  });
}
