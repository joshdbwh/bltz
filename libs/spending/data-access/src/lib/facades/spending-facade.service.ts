import { Injectable, inject, signal } from '@angular/core';
import { SpendingState } from '../state/spending-state.model';
import { SpendingDataService } from '../data-services/spending-data.service';

const initialState: Readonly<SpendingState> = {};

@Injectable({
  providedIn: 'root',
})
export class SpendingFacadeService {
  readonly #spendingDataService = inject(SpendingDataService);

  readonly #state = signal(initialState);
  // add readonly state slices with computed(() => this.#state().someSlice)
}
