import { Component } from '@angular/core';
import {Enfant} from '../enfant/enfant';

@Component({
  selector: 'app-parent',
  imports: [Enfant],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent {
  messageFromChildren: string = '';

  getMessageChildren($event: string) {
    this.messageFromChildren = $event;
  }
}
