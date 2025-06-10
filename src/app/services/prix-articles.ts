import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PrixArticles {
  
  constructor() {
  }

  prix = [
      { id: 1, name: 'Carte graphique', price: 899, stock: 2 },
      { id: 2, name: 'Ecrans 4k 240hz', price: 499, stock: 124 },
      { id: 3, name: 'Claviers et Souris', price: 125, stock: 15 },
    ];

  getAllprix(){
    return this.prix;
  }
  handleDelete(product: any) : void {
    let confirmMsg = confirm('Voulez-vous supprimer cet article ?');

    if(confirmMsg){
      this.prix = this.prix.filter(p => p.id !== product.id);
    }
  }
}
