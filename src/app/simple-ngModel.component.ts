import {Component} from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <input [(ngModel)]="name" #ctrl="ngModel" required>

    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    <button (click)="setValue()">Set value</button>
  `
})
export class SimpleNgModelComponent {
  name = '';

  setValue() { this.name = 'Nancy'; }
}
