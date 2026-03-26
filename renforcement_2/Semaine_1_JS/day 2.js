// Challenge 1
// Tu développes un lecteur de musique. Tu as un tableau de 10 chansons (chaque chanson est un objet : titre, artiste, durée en secondes, genre).

// 1. Affiche uniquement les titres de toutes les chansons
// 2. Crée un nouveau tableau contenant uniquement les chansons de genre "Rock"
// 3. Crée un nouveau tableau où chaque durée est convertie en format "3:45" (minutes:secondes)
// 4. Calcule la durée totale de la playlist en minutes et secondes
// 5. Trouve la chanson la plus longue
// 6. Vérifie si toutes les chansons durent moins de 6 minutes
// 7. Vérifie si au moins une chanson est du genre "Jazz"
// 8. Trie les chansons par durée, de la plus courte à la plus longue

let musique = [
  {
    titre: "fd",
    artiste: "klin",
    duree_en_secondes: 300,
    genre: "dj",
  },
  {
    titre: "sf",
    artiste: "bun",
    duree_en_secondes: 250,
    genre: "rmix",
  },
  {
    titre: "huna",
    artiste: "run",
    duree_en_secondes: 213,
    genre: "rap",
  },
  {
    titre: "bilal",
    artiste: "str",
    duree_en_secondes: 320,
    genre: "sanfenua",
  },
  {
    titre: "tirah",
    artiste: "for",
    duree_en_secondes: 150,
    genre: "dj",
  },
  {
    titre: "ana w ari",
    artiste: "tir",
    duree_en_secondes: 240,
    genre: "hip hop",
  },
  {
    titre: "dar",
    artiste: "girite",
    duree_en_secondes: 350,
    genre: "hip hop",
  },
  {
    titre: "s3id",
    artiste: "fifie",
    duree_en_secondes: 155,
    genre: "hip hop",
  },
  {
    titre: "mohand",
    artiste: "hiha",
    duree_en_secondes: 250,
    genre: "hip hop",
  },
  {
    titre: "ya baba",
    artiste: "gira",
    duree_en_secondes: 300,
    genre: "  ",
  },
];
musique.forEach((Element) => {
  console.log("titre:" + Element.titre);
});
let filte_musique = musique.filter((musiqu) => musiqu.genre == "Rock");
console.log(filte_musique);

// let format_minutes = musique.map((musiqu) => {
//   let mintes = Math.round(musiqu.duree_en_secondes / 60);
//   let secondes = Math.round((musiqu.duree_en_secondes / 60) * 10);
//   musiqu.duree_en_secondes = mintes + ":" + secondes;
//   return musiqu;
// });
// console.log(format_minutes);
let total = 0;
musique.forEach((element) => {
  total = total + element.duree_en_secondes;
});
let secondes = Math.round((total / 60) * 100) / 100;

console.log("Calcule la durée totale de la playlist:" + secondes);

console.log("------------------------------------------");

console.log(musique);
console.log("------------------------------------------");

console.log(
  musique.sort((a, b) => a.duree_en_secondes - b.duree_en_secondes)[
    musique.length - 1
  ],
);
let mint6 = false;
let lok = musique.sort((a, b) => a.duree_en_secondes - b.duree_en_secondes)[
  musique.length - 1
];

let j = musique.some((element) => element.duree_en_secondes >= 360);
if (!j) {
  console.log("toutes les chansons durent moins de 6 minutes");
}

let Jazz = musique.some((element) => element.genre == "Jazz");
if (Jazz) {
  console.log('moins une chanson est du genre "Jazz"');
}

let chansons = musique.sort(
  (a, b) => a.duree_en_secondes - b.duree_en_secondes,
);
console.log(chansons);

// ## R-Challenge 2 — L'analyse des ventes

// Tu es data analyst dans un magasin. Tu as un tableau de 12 objets représentant les ventes mensuelles (mois, chiffre_affaires, nb_clients, ville).

// 1. Calcule le chiffre d'affaires total de l'année
// 2. Calcule le chiffre d'affaires moyen par mois
// 3. Trouve le mois avec le meilleur chiffre d'affaires
// 4. Trouve le mois avec le moins de clients
// 5. Crée un nouveau tableau avec uniquement les mois où le CA dépasse 50 000€
// 6. Crée un résumé par ville : pour chaque ville, le CA total et le nombre total de clients
// 7. Trie les mois par chiffre d'affaires décroissant
// 8. Calcule la croissance entre chaque mois (CA mois N - CA mois N-1) et affiche-la

let data = [
  {
    mois: 1,
    chiffre_affaires: 15000,
    nb_clients: 150,
    ville: "dakhla",
  },
  {
    mois: 2,
    chiffre_affaires: 5000,
    nb_clients: 150,
    ville: "agdir",
  },
  {
    mois: 3,
    chiffre_affaires: 36000,
    nb_clients: 150,
    ville: "agdir",
  },
  {
    mois: 4,
    chiffre_affaires: 14000,
    nb_clients: 150,
    ville: "dakhla",
  },
  {
    mois: 5,
    chiffre_affaires: 18000,
    nb_clients: 150,
    ville: "agdir",
  },
  {
    mois: 6,
    chiffre_affaires: 18000,
    nb_clients: 150,
    ville: "dakhla",
  },
  {
    mois: 7,
    chiffre_affaires: 16000,
    nb_clients: 150,
    ville: "agdir",
  },
  {
    mois: 8,
    chiffre_affaires: 18800,
    nb_clients: 150,
    ville: "dakhla",
  },
  {
    mois: 9,
    chiffre_affaires: 7500,
    nb_clients: 150,
    ville: "agdir",
  },
  {
    mois: 10,
    chiffre_affaires: 9000,
    nb_clients: 150,
    ville: "agdir",
  },
  {
    mois: 11,
    chiffre_affaires: 55000,
    nb_clients: 180,
    ville: "dakhla",
  },
  {
    mois: 12,
    chiffre_affaires: 50000,
    nb_clients: 17,
    ville: "dakhla",
  },
];
let chiffre_daffaires = data.reduce(
  (acc, curr) => acc + curr.chiffre_affaires,
  0,
);
console.log(chiffre_daffaires);
let daffaires_moyen = chiffre_daffaires / data.length;
console.log(daffaires_moyen.toFixed(2));

let bin = data.sort((a, b) => a.chiffre_affaires - b.chiffre_affaires);
console.log(bin[data.length - 1]);
let clients = data.sort((a, b) => a.nb_clients - b.nb_clients);
console.log(clients[data.length - 1]);
let depasse_50000 = data.filter((element) => element.chiffre_affaires >= 50000);
console.log(depasse_50000);
let obj={};
data.forEach((element, i) => {
  if (!obj[element.ville]) {
    obj[element.ville] = 0;
  }
  obj[element.ville] += 1;
});
console.log(Object.keys(obj));
