import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@bltz/shared/utils';

type WelcomeType = unknown;

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = inject(BaseUrl);

  get(id: string) {
    return this.#http.get<WelcomeType>(`${this.#baseUrl}/welcome/${id}`);
  }

  getAll() {
    return this.#http.get<WelcomeType[]>(`${this.#baseUrl}/welcomes`);
  }
}
