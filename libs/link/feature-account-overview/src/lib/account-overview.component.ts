import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkFacadeService } from '@ng-journal/link/data-access';

@Component({
  selector: 'ng-journal-account-overview',
  standalone: true,
  imports: [CommonModule],
  template: `<p>AccountOverview works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOverviewComponent {
  readonly #linkFacade = inject(LinkFacadeService);
}
