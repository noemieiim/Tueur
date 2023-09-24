"use strict";

let pdvtueur = 100;
let nomperso = ["jessica", "lina", "kevin", "sabrina", "nick"];
let crct = ["le séducteur","le sportif","l'asthmique","la blonde","le nerd"];
let probaAttaque = [ 0.5, 0.2, 0.3];
let probaDedead  = [0.4, 0.3, 0.3];
let probaDeadAttaque = [0.6, 0.2, 0.2];
let mort = [];
let persos = [];
let idperso = 0;

function aleatoire(min, max) { 
  return Math.random() * (max - min) + min;   // attribut aleatoirement les probaAttaque probaDeDead probaDeDeadAttaque aux survivants
}

class Personnage {
    constructor(nom,caracteristiques) {
      this.nom = nom; // Le nom du personnage
      this.caracteristiques = caracteristiques;
      this.probaAttaque = aleatoire(0.1, 0.9);
      this.probaDead = aleatoire(0.1, 0.9);
      this.probaDeadAttaque = aleatoire(0.1, 0.9); 
    }


    actions(perso) {
      // personnage choisi aléatoirement
      idperso = Math.floor(Math.random() * persos.length);
      perso = persos[idperso];
      console.log(`jason attaque ${perso.nom}.`);
      // Vérifie si le personnage réussit à attaquer en comparant à la probabilité de MORT
      if (aleatoire(0.1, 1.0)<=0.2) {
        mort.push(this.nom); // ajoute le survivant a la liste des morts et on le supprime de la liste des persos
        persos.pop(this.nom);
        console.log(`${this.nom} MEURT`);
      // Vérifie si le survivant esquive et inflige 10 de dégats au tueur 
      } if (probaAttaque > probaDedead) {
        // Réduit les points de vie du tueur 
        pdvtueur -= 10;
        console.log(`${this.nom} esquive et inflige 10 de degats `);
      }
      // verifie si le survivant inflige 15 degats et meurt
      if (probaAttaque < probaDedead) {
        mort.push(this.nom);
        persos.pop(this.nom);
        pdvtueur -= 15;
        console.log(`${this.nom} inflige 15 points de dégâts et meurt.`);
      }

      // Vérifie si le tueur est mort :) (points de vie <= 0)
      if (pdvtueur <= 0) {
        // Affiche un message indiquant que le tueur est mort
        console.log(` le tueur est mort :).`);
      }
    }
  }
     for (let i = 0; i < nomperso.length && i < crct.length; i++) {  // c'est la ou je cree les personnages sauf que les personnages se cree pas
     let nom = nomperso[i];                                           // j'ai essayé de faire du mieux que j'ai pu mais je ne trouve pas l'erreur
     let caracteristiques = crct[i];
     let personnage = new Personnage(nom, caracteristiques);
     console.log(`${persos}:`);
     persos.push(personnage);
  }
  // Boucle de combat jusqu'à ce que jason soit mort ou que les survivants soient tous morts
  let tour = 1; 
  while (pdvtueur > 0 && mort.length < 5) {
    console.log(`Tour ${tour}:`);

  // Vérifie si jason est mort
  if (pdvtueur <= 0) {
    console.log(`Les survivants ont gagné mais RIP ${mort}`);
    break; // Sort de la boucle si jason est mort
  }

  // Vérifie si les survivants sont morts
  if (persos.length === 0) {
    console.log(`Jason a tué tout le monde`);
    break; // Sort de la boucle si les survivants sont morts
  }
  tour++;
  // Affiche un message indiquant le résultat du combat
  if (pdvtueur <= 0) {
    console.log(`Les survivants ont gagné!`);
  } else if (persos.length = 0) {
    console.log(`Jason a tué tout le monde`);
  }
  
}







          
