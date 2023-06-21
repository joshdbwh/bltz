import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'bltz-flat-button',
  standalone: true,
  imports: [MatButtonModule],
  template: `<button mat-button color="accent">Flat Button</button>`,
  styleUrls: ['./flat-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlatButtonComponent {}
