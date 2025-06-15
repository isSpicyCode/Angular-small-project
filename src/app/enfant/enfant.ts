import { Component, output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.scss'
})
export class Enfant {
  messageToParent = output<string>();

  sendMessageToParent(){
    this.messageToParent.emit('Message from Enfant component');
  }
}
