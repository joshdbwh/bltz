import { Injectable, inject, signal } from '@angular/core';
import { LinkState } from '../state/link-state.model';
import { LinkDataService } from '../data-services/link-data.service';

const initialState: Readonly<LinkState> = {};

@Injectable({
  providedIn: 'root',
})
export class LinkFacadeService {
  readonly #linkDataService = inject(LinkDataService);

  readonly #state = signal(initialState);
  // add readonly state slices with computed(() => this.#state().someSlice)
}
