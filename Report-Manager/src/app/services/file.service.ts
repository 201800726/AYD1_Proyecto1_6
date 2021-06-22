import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  public url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = `${environment.url}/file`;
  }

  public async get(id: number): Promise<any> {
    return await this._httpClient.get(`${this.url}/${id}`)
      .toPromise();
  }
}
