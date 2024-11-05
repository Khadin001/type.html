// 1. Définition de l'interface Véhicule
interface Véhicule {
    marque: string;
    modèle: string;
    année: number;
    start(): void;
  }
  
  // 2. Implémentation de la classe Voiture qui implémente l'interface Véhicule
  class Voiture implements Véhicule {
    marque: string;
    modèle: string;
    année: number;
  
    // Constructeur qui initialise les propriétés marque, modèle et année
    constructor(marque: string, modèle: string, année: number) {
      this.marque = marque;
      this.modèle = modèle;
      this.année = année;
    }
  
    // Implémentation de la méthode start qui enregistre un message spécifique
    start(): void {
      console.log("Car engine wanted");
    }
  }
  
  // 3. Création d'une instance de la classe Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2022);
  
  // 4. Appel de la méthode start sur l'instance
  maVoiture.start(); // Cela affichera "Car engine wanted" dans la console
  