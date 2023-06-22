import { Injectable, inject, signal } from '@angular/core';
import { WelcomeState } from '../state/welcome-state.model';
import { WelcomeDataService } from '../data-services/welcome-data.service';

const initialState: Readonly<WelcomeState> = {};

@Injectable({
  providedIn: 'root',
})
export class WelcomeFacadeService {
  readonly #welcomeDataService = inject(WelcomeDataService);

  readonly #state = signal(initialState);
  // add readonly state slices with computed(() => this.#state().someSlice)
}
