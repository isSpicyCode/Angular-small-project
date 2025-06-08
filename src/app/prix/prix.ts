import { Component, OnInit } from '@angular/core';

interface Article {
  id: number;
  name: string | number;
  price: number;
  stock: boolean;
}

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

  ngOnInit(): void {
    this.prix = [
      { id: 1, name: 'Carte graphique', price: 899, stock: true },
      { id: 2, name: 'Ecrans 4k 240hz', price: 499, stock: false },
      { id: 3, name: 'Claviers et Souris', price: 125, stock: true },
    ];
  }
}
