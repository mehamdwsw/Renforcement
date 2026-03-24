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
let obj={
    nom:'ahmed',
    prenom:'dift',
    âge:20,
    email:"ahmed@gmail.com",
    ville :"dakhla",
}

