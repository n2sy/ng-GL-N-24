import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input({ required: true }) color: string = 'grey';
  @Output() childEvent = new EventEmitter();

  sendMsg() {
    this.childEvent.emit('Message de la part du Child');
  }
}
