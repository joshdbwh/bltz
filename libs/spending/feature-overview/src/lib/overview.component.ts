import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendingFacadeService } from '@bltz/spending/data-access';
import { FlatButtonComponent } from '@bltz/ui';
import { CalculationsService } from '@bltz/spending/utils';
import { TableComponent } from '@bltz/spending/ui';

@Component({
  selector: 'bltz-overview',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Overview works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent {
  readonly #spendingFacade = inject(SpendingFacadeService);
}
