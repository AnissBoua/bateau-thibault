import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (this._storage) return;
    
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public remove(key: string) {
    this._storage?.remove(key);
  }

  public async get(key: string) {
    if (!this._storage) {
      await this.init();
    }
    return await this._storage?.get(key);
  }
}
