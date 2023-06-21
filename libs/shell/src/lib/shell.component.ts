import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlatButtonComponent, RaisedButtonComponent } from '@ez/ui';

@Component({
  selector: 'bltz-shell',
  standalone: true,
  imports: [FlatButtonComponent, RaisedButtonComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {}
