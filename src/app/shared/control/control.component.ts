import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
})
export class ControlComponent {
  lable = input.required<string>();
}
