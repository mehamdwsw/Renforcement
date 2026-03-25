// Challenge 1;
let nom = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
console.log(nom[0]);
console.log([nom.length]);
console.log(nom.length);
nom.push("ahmed");
let test = nom.pop();
nom.push(test);
nom.splice(0, 1);
// Challenge 2
let fid = [12, 8, 15, 6, 18, 9, 14];

fid.forEach((element) => {
  console.log(element);
});
let somme = 0;
fid.forEach((element) => {
  somme = somme + element;
});
console.log(somme);
console.log(somme / fid.length);
let note = fid[0];
fid.forEach((element) => {
  if (element > note) {
    note = element;
  }
});
console.log(note);
fid.forEach((element) => {
  if (element < note) {
    note = element;
  }
});
console.log(note);
let ited = 0;
fid.forEach((element) => {
  if (element >= 10) {
    ited = element;
  }
});
console.log(ited);

fid.forEach((element) => {
  console.log(element);
});
// Challenge 3
let obj = [
  {
    nom: "ahmed",
    prenom: "dift",
    âge: 20,
    email: "ahmed@gmail.com",
    ville: "dakhla",
  },
  {
    nom: "ftrd",
    prenom: "dd",
    âge: 22,
    email: "ds@gmail.com",
    ville: "sssdd",
  },
];

Object.values(obj).forEach((element) => {
  console.log(element);
});
// Challenge 4
let tableau = [
  {
    nom: "pc",
    quantite: 10,
    prix_unitaire: 2000,
  },
  {
    nom: "cpu intel",
    quantite: 10,
    prix_unitaire: 2000,
  },
  {
    nom: "cpu amd",
    quantite: 10,
    prix_unitaire: 2000,
  },
  {
    nom: "gpu rx 580",
    quantite: 10,
    prix_unitaire: 2000,
  },
  {
    nom: "ssd 1 Tb",
    quantite: 10,
    prix_unitaire: 2000,
  },
];
let sous_total = 0;
tableau.forEach((element) => {
  sous_total = sous_total + element.prix_unitaire * element.quantite;
  console.log(
    element.nom +
      "*" +
      element.quantite +
      "=" +
      element.prix_unitaire * element.quantite +
      " DH",
  );
});
console.log("TVA=" + sous_total * 0.2);
// ## S-Challenge 5 — Le trombinoscope
let etudiants = [
  {
    nom: "ahmed",
    prenom: "dak",
    age: 20,
    moyenne: 20,
  },
  {
    nom: "osama",
    prenom: "bkir",
    age: 25,
    moyenne: 15,
  },
  {
    nom: "mohamed",
    prenom: "bou",
    age: 21,
    moyenne: 14,
  },
  {
    nom: "yasin",
    prenom: "nuer",
    age: 26,
    moyenne: 18,
  },
  {
    nom: "abd smad",
    prenom: "sir",
    age: 23,
    moyenne: 9,
  },
  {
    nom: "karim",
    prenom: "fin",
    age: 18,
    moyenne: 11,
  },
];
let etudiants_moyenne = etudiants.filter((user) => user.moyenne >= 12);
console.log(etudiants_moyenne);
console.log(etudiants.sort((a, b) => a.age - b.age));
let cherche_un_etudiant = "h";
let ths = null;
etudiants.forEach((element) => {
  if (element.nom == cherche_un_etudiant) {
    ths = element;
  }
});
if (ths == null) {
  console.log("Étudiant non trouvé");
} else {
  console.log(ths);
}
