import { Injectable, inject, signal } from '@angular/core';
import { AuthState } from '../state/auth-state.model';
import { AuthDataService } from '../data-services/auth-data.service';

const initialState: Readonly<AuthState> = {};

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  readonly #authDataService = inject(AuthDataService);

  readonly #state = signal(initialState);
  // add readonly state slices with computed(() => this.#state().someSlice)
}
