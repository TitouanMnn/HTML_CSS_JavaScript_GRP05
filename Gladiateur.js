class Personnage {
    constructor(nom) {
        this.nom = nom;
        this.pointsDeVie = Math.floor(Math.random() * 101) + 50; // Entre 50 et 150
        this.attaque = Math.floor(Math.random() * 11) + 10; // Entre 10 et 20
        this.precision = Math.random() * 0.5 + 0.5; // Entre 0.5 et 1.0
    }

    // Fonction pour attaquer
    attaquer(adversaire) {
        if (this.testerPrecision()) {
            const degats = Math.floor(Math.random() * this.attaque) + 1; // Dégâts entre 1 et attaque max
            adversaire.pointsDeVie -= degats;
            console.log(this.nom + " attaque " + adversaire.nom + " et inflige " + degats + " dégâts !");
        } else {
            console.log(this.nom + " rate son attaque contre " + adversaire.nom + " !");
        }
    }

    // Fonction pour tester la précision
    testerPrecision() {
        return Math.random() < this.precision;
    }
}

// Création de deux personnages avec des caractéristiques aléatoire
const Lion = new Personnage("Lion");
const gladiateur = new Personnage("Spartacus");

// Affichage des caractéristiques initiales
console.log("Caractéristiques des combattants :");
console.log(gladiateur.nom +" - Points de vie : " +gladiateur.pointsDeVie +", Attaque : " + gladiateur.attaque + ", Précision : " +gladiateur.precision.toFixed(2));
console.log(Lion.nom +  " - Points de vie : " + Lion.pointsDeVie + ", Attaque : " + Lion.attaque + ", Précision : " + Lion.precision.toFixed(2));

// Combat dans une boucle
console.log("\nDébut du combat !");
while (gladiateur.pointsDeVie > 0 && Lion.pointsDeVie > 0) {
    // Gladiateur 1 attaque
    gladiateur.attaquer(Lion);

    // Vérifier si gladiateur 2 est toujours en vie
    if (Lion.pointsDeVie <= 0) {
        console.log(Lion.nom + " est tombé ! " + gladiateur.nom + " remporte le combat !");
        break;
    }

    // Gladiateur 2 attaque
    Lion.attaquer(gladiateur);

    // Vérifier si gladiateur 1 est toujours en vie
    if (gladiateur.pointsDeVie <= 0) {
        console.log(gladiateur.nom + " est tombé ! " + Lion.nom + " remporte le combat !");
        break;
    }

    console.log(
        "Points de vie restants : " + gladiateur.nom +" (" +gladiateur.pointsDeVie + ") - " + Lion.nom +" (" +Lion.pointsDeVie +")");
}

console.log("Fin du combat !");