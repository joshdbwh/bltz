import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@bltz/shared/utils';

type SpendingType = unknown;

@Injectable({
  providedIn: 'root',
})
export class SpendingDataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = inject(BaseUrl);

  get(id: string) {
    return this.#http.get<SpendingType>(`${this.#baseUrl}/spending/${id}`);
  }

  getAll() {
    return this.#http.get<SpendingType[]>(`${this.#baseUrl}/spendings`);
  }
}
