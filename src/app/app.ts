import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Parent} from './parent/parent';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [RouterOutlet, Parent],
})
export class App {

      afficherAlert() {
      window.alert('Bouton cliqué !');
  }
  title: string = 'Bienvenue dans mon projet Angular';
}
