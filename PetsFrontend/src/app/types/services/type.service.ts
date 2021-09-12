import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Type } from '../interfaces/type.interface';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private URL: string = 'http://127.0.0.1:8000/types';
  
  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Observable<Type[]> {
    return this._httpClient.get<Type[]>(this.URL)
  }

  // getName(id_type: number): Observable<string>{
  //   return this._httpClient.get<string>(`${this.URL}/name/${id_type}`);
  // }
}
