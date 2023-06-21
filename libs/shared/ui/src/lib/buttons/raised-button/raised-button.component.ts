import { NgClass, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bltz-raised-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, NgClass, NgIf],
  template: `
    <button
      mat-raised-button
      [color]="color"
      [ngClass]="size"
      [disabled]="disabled"
      (click)="clicked.emit()"
    >
      <mat-icon *ngIf="icon">{{ icon }}</mat-icon>
      {{ label }}
    </button>
  `,
  styleUrls: ['./raised-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaisedButtonComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Output() clicked = new EventEmitter<void>();
}
