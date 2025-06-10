import { Component, OnInit } from '@angular/core';
import { PrixArticles } from '../services/prix-articles';

@Component({
  selector: 'app-prix',
  standalone: true,
  imports: [],
  templateUrl: './prix.html',
  styleUrls: ['./prix.scss'],
})
export class Prix implements OnInit {
  prix: any[] = [];

  constructor(private prixService: PrixArticles) {}
  ngOnInit(): void {
    this.getAllprix();
  }

  getAllprix() {
    this.prix = this.prixService.getAllprix();
  }
  
  handleDelete(product: any) : void {
      this.prixService.handleDelete(product);
      this.getAllprix();
  }
}
