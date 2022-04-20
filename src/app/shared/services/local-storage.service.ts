import { Injectable } from '@angular/core';

export enum LocalStorageKey {
  ACCESS_TOKEN = 'accessToken',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  save(key: LocalStorageKey, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: LocalStorageKey): string | null {
    return localStorage.getItem(key);
  }
}
