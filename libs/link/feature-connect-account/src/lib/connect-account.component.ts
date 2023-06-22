import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkFacadeService } from '@ng-journal/link/data-access';

@Component({
  selector: 'ng-journal-connect-account',
  standalone: true,
  imports: [CommonModule],
  template: `<p>ConnectAccount works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectAccountComponent {
  readonly #linkFacade = inject(LinkFacadeService);
}
