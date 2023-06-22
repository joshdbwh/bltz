import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeFacadeService } from '@bltz/welcome/data-access';
import { FlatButtonComponent } from '@bltz/ui';
import { TableComponent } from '@bltz/welcome/ui';

@Component({
  selector: 'bltz-landing',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Landing works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  readonly #welcomeFacade = inject(WelcomeFacadeService);
}
