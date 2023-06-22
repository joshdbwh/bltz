import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendingFacadeService } from '@ng-journal/spending/data-access';

@Component({
  selector: 'ng-journal-overview',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Overview works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  readonly #spendingFacade = inject(SpendingFacadeService);
}
