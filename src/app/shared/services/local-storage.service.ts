import { Injectable } from "@angular/core";

export enum LocalStorageKey {
  ACCESS_TOKEN = 'accessToken',
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public save(key: LocalStorageKey, value: string): void {
    localStorage.setItem(key, value);
  }

  public get(key: LocalStorageKey): string | null {
    return localStorage.getItem(key);
  }
}
