import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@ng-journal/shared/utils';

type LinkType = unknown;

@Injectable({
  providedIn: 'root',
})
export class LinkDataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = inject(BaseUrl);

  get(id: string) {
    return this.#http.get<LinkType>(`${this.#baseUrl}/link/${id}`);
  }

  getAll() {
    return this.#http.get<LinkType[]>(`${this.#baseUrl}/links`);
  }
}
