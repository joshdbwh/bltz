import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkFacadeService } from '@bltz/link/data-access';
import { FlatButtonComponent } from '@bltz/ui';

@Component({
  selector: 'bltz-connect-account',
  standalone: true,
  imports: [CommonModule],
  template: `<p>ConnectAccount works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectAccountComponent {
  readonly #linkFacade = inject(LinkFacadeService);
}
