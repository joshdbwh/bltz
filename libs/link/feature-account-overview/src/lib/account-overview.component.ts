import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkFacadeService } from '@bltz/link/data-access';
import { FlatButtonComponent } from '@bltz/ui';

@Component({
  selector: 'bltz-account-overview',
  standalone: true,
  imports: [CommonModule],
  template: `<p>AccountOverview works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOverviewComponent {
  readonly #linkFacade = inject(LinkFacadeService);
}
