import { Component, OnInit } from '@angular/core';

type Article = {
  id: number;
  name: string | number;
  price: number;
  stock: number;
};

@Component({
  selector: 'app-prix',
  standalone: true,
  imports: [],
  templateUrl: './prix.html',
  styleUrls: ['./prix.scss'],
})
export class Prix implements OnInit {
  prix: Article[] = [];

  constructor() {}

  ngOnInit(): any {
    this.prix = [
      { id: 1, name: 'Carte graphique', price: 899, stock: 2 },
      { id: 2, name: 'Ecrans 4k 240hz', price: 499, stock: 124 },
      { id: 3, name: 'Claviers et Souris', price: 125, stock: 15 },
    ];
  }
  handleDelete(product: any) : void{
    let confirmMsg = confirm('Voulez-vous supprimer cet article ?');
    
    if(confirmMsg){
      this.prix = this.prix.filter((items: any)=> items.id !== product.id);
    }
  }
}
