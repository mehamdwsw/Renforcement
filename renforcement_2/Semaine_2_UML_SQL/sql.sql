-- challenge 06


-- ex 01
SELECT l.titre, e.nom, g.nom
FROM livres l
JOIN editeurs e ON l.editeur_id = e.id
JOIN genres g ON l.genre_id = g.id;

-- ex 02
SELECT e.nom, COUNT(*) as nbr
FROM editeurs e
JOIN livres l ON e.id = l.editeur_id
GROUP BY e.nom
ORDER BY nbr DESC;

-- ex 03
SELECT g.nom, SUM(l.prix * v.quantite) as CA
FROM genres g
JOIN livres l ON g.id = l.genre_id
JOIN ventes v ON l.id = v.livre_id
GROUP BY g.nom;

-- ex 04
SELECT e.nom
FROM editeurs e
LEFT JOIN livres l ON e.id = l.editeur_id
LEFT JOIN ventes v ON l.id = v.livre_id
WHERE v.id IS NULL;

-- ex 05
SELECT g.nom, l.titre, SUM(v.quantite) as total
FROM genres g
JOIN livres l ON g.id = l.genre_id
JOIN ventes v ON l.id = v.livre_id
GROUP BY l.id
ORDER BY total DESC;

-- ex 06
SELECT client
FROM ventes v
JOIN livres l ON v.livre_id = l.id
GROUP BY client
HAVING COUNT(DISTINCT l.genre_id) > 3;

-- ex 07
SELECT MONTH(date_vente) as mois, SUM(l.prix * v.quantite) as CA
FROM ventes v
JOIN livres l ON v.livre_id = l.id
GROUP BY mois;

-- ex 08
SELECT * FROM livres l
WHERE annee_publication > 2020 
AND prix > (SELECT AVG(prix) FROM livres WHERE genre_id = l.genre_id);


-- challenge 07

-- ex 01
SELECT m.nom, p.nom, c.diagnostic
FROM consultations c
JOIN medecins m ON c.medecin_id = m.id
JOIN patients p ON c.patient_id = p.id;

-- ex 02
SELECT m.nom, COUNT(*) as total
FROM medecins m
JOIN consultations c ON m.id = c.medecin_id
WHERE MONTH(c.date_consultation) = MONTH(NOW())
GROUP BY m.nom;

-- ex 03
SELECT p.nom, SUM(c.cout) as total_paye
FROM patients p
JOIN consultations c ON p.id = c.patient_id
GROUP BY p.nom;

-- ex 04
SELECT p.nom
FROM patients p
LEFT JOIN consultations c ON p.id = c.patient_id
WHERE c.id IS NULL;

-- ex 05
SELECT m.nom, COUNT(DISTINCT c.patient_id) as nbr_p
FROM medecins m
JOIN consultations c ON m.id = c.medecin_id
GROUP BY m.id
ORDER BY nbr_p DESC
LIMIT 1;

-- ex 06
SELECT pr.medicament, m.nom
FROM prescriptions pr
JOIN consultations c ON pr.consultation_id = c.id
JOIN medecins m ON c.medecin_id = m.id
JOIN patients p ON c.patient_id = p.id
WHERE p.nom = "Soufyane";

-- ex 07
SELECT m.specialite, COUNT(*) as nbr
FROM medecins m
JOIN consultations c ON m.id = c.medecin_id
GROUP BY m.specialite
ORDER BY nbr DESC
LIMIT 1;