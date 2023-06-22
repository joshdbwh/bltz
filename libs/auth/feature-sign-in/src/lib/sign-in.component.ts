import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFacadeService } from '@bltz/auth/data-access';
import { FlatButtonComponent } from '@bltz/ui';

@Component({
  selector: 'bltz-sign-in',
  standalone: true,
  imports: [CommonModule],
  template: `<p>SignIn works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent {
  readonly #authFacade = inject(AuthFacadeService);
}
