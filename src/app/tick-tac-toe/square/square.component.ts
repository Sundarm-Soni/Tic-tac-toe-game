import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'square',
  standalone: true,
  imports: [],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
@Input() public value!: string;
@Output() public send: EventEmitter<void> = new EventEmitter();
}
