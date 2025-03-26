import {
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // @Output() add = new EventEmitter()

  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();

  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form().nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
