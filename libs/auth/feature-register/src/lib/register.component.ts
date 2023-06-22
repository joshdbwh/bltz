import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacadeService } from '@bltz/auth/data-access';
import { FlatButtonComponent } from '@bltz/ui';

@Component({
  selector: 'bltz-register',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Register works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  readonly #authFacade = inject(AuthFacadeService);
}
