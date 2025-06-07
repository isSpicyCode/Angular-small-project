import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  imports: [RouterOutlet],
})
export class App {
      afficherAlert() {
      window.alert('Bouton cliqué !');
  }
  tilte: string = 'Bienvenue dans mon projet Angular';
}
