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
    ville: "taza",
  },
  {
    mois: 11,
    chiffre_affaires: 55000,
    nb_clients: 180,
    ville: "taza",
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
let obj = {};
data.forEach((element, i) => {
  if (!obj[element.ville]) {
    obj[element.ville] = 0;
  }
  obj[element.ville] += 1;
});
let resume = Object.keys(obj);
let test = [];
resume.forEach((element) => {
  data.forEach((element_data) => {
    if (test[element] == null) {
      test[element] = {
        city: element,
        clients: 0,
        CA_total: 0,
      };
    }
    if (element_data.ville == element) {
      test[element].clients += element_data.nb_clients;
      test[element].CA_total += element_data.chiffre_affaires;
    }
  });
});
console.log(test);
console.log("------------------------------------------------------------");
data.sort((b, a) => a.chiffre_affaires - b.chiffre_affaires);
console.log(data);
data.sort((a, b) => a.mois - b.mois);
let final = Object;
for (i = 0; i < 11; i++) {
  final[data[i].mois + ":" + (data[i].mois + 1)] =
    data[i].chiffre_affaires - data[i + 1].chiffre_affaires + "DH";
}

console.log(final);
// ## R-Challenge 3 — Le système de notation 🔥

// Un site web de recettes a un tableau d'avis utilisateurs (pseudo, note de 1 à 5, commentaire, date). Tu as 15 avis.

// 1. Calcule la note moyenne arrondie à 1 décimale
// 2. Compte combien d'avis par note (combien de 1 étoile, combien de 2 étoiles, etc.)
// 3. Filtre les avis positifs (≥ 4) et les avis négatifs (≤ 2)
// 4. Trie les avis du plus récent au plus ancien
// 5. Trouve l'avis le plus long (en nombre de caractères dans le commentaire)
// 6. Crée un résumé : "4.2/5 basé sur 15 avis — 8 positifs, 3 négatifs, 4 neutres"
let notation = [
  {
    pseudo: "ahmed",
    note: 3,
    commentaire: "godd bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 1,
    commentaire: "ff",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 2,
    commentaire: "good bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 1,
    commentaire: "f bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 2,
    commentaire: "goodd bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 5,
    commentaire: "df bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 4,
    commentaire: "googfd bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 3,
    commentaire: "goodddd bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 4,
    commentaire: "gooddd bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 5,
    commentaire: "gfggood bro",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 4,
    commentaire: "good dfgdfgfdg",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 4,
    commentaire: "good brfgfdgo",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 4,
    commentaire: "good dfgd",
    date: "3/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 4,
    commentaire: "good brofd",
    date: "1/26/2026",
  },
  {
    pseudo: "ahmed",
    note: 2.5,
    commentaire: "goofffffffffdhg",
    date: "2/26/2026",
  },
];
let moyenne = 0;
let b = notation.reduce((element) => {
  moyenne += element.note;
  return element;
});
console.log("moyenne: " + moyenne / notation.length + " star");
let combien = Array;
notation.forEach((element) => {
  if (combien[element.note] == null) {
    combien[element.note] = 0;
  } else {
    combien[element.note] = combien[element.note] + 1;
  }
});
console.log(combien);
let filter = notation.filter(
  (element) => (element.note <= 4) & (element.note >= 2),
);
console.log(filter);
console.log("------------------------------------------------------------");

notation.sort((a, b) => new Date(b.date) - new Date(a.date));
console.log(notation);
let long = notation[0].commentaire.length;
let plus_long=[]
notation.forEach((element, i) => {
  if (element.commentaire.length > long) {
    plus_long = element.commentaire;
  }
});

console.log("commentaire: "+plus_long);
let positifs=0;
let negatifs=0;
let neutres=0;
notation.forEach(element => {
  if(element.note>=4){
  positifs++
  }
  if(element.note<=2){
    negatifs++
  }
  if(element.note==2.5){
    neutres++
  }
});





console.log(moyenne/notation.length +"/5" +" basé sur "+notation.length+" avis"+"— "+positifs+" positifs, "+negatifs+" négatifs, "+neutres+" neutres");
