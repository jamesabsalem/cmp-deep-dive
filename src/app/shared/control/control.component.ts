import {
  Component,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  lable = input.required<string>();
  private el = inject(ElementRef);
  onClick() {
    console.log('clicked');
    console.log(this.el.nativeElement);
  }
}
