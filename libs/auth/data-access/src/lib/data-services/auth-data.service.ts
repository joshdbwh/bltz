import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@bltz/shared/utils';

type AuthType = unknown;

@Injectable({
  providedIn: 'root',
})
export class AuthDataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = inject(BaseUrl);

  get(id: string) {
    return this.#http.get<AuthType>(`${this.#baseUrl}/auth/${id}`);
  }

  getAll() {
    return this.#http.get<AuthType[]>(`${this.#baseUrl}/auths`);
  }
}
