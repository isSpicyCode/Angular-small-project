import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-compteur',
  imports: [],
  templateUrl: './compteur.html',
  styleUrl: './compteur.scss'
})
export class Compteur {
   count = signal(0);

   increment() {
    this.count.update(c => c + 1);
   }

   decrement(){
    this.count.update(c => c - 1);
   }

   reset(){
    this.count.set(0);
   }

}


