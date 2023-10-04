import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-interaction',
  template: `
    <h2>{{ 'Hello ' + name }}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styleUrls: ['./comp-interaction.component.css'],
})
export class CompInteractionComponent {
  // parent to child component getting
  @Input('parentData') name: any;

  // child to parent component
  @Output() childEvent = new EventEmitter();

  fireEvent() {
    this.childEvent.emit('Hey Shreyas from Child');
  }
}
