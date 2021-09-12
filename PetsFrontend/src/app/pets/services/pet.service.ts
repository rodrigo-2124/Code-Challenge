import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { Pet } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private URL: string = 'http://127.0.0.1:8000/pets';
  
  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Observable<Pet[]> {
    return this._httpClient.get<Pet[]>(this.URL)
  }

  create(data: string []): Observable<any> {
    let new_pet= new FormData();
    new_pet.append('name', data[0]);
    new_pet.append('gender', data[1]);
    new_pet.append('id_type', data[2]);
    return this._httpClient.post(this.URL, new_pet);
  }

  delete(id: number): Observable<any>{
    return this._httpClient.delete(`${this.URL}/${id}`);
  }

  getByName(search: string): Observable<Pet[]> {
    return this._httpClient.get<Pet[]>(`${this.URL}/name/${search}`);
  }

  getByType(id_type: number): Observable<Pet[]> {
    return this._httpClient.get<Pet[]>(`${this.URL}/type/${id_type}`);
  }

  getByTypeAndGender(id_type: number, gender:string): Observable<Pet[]> {
    return this._httpClient.get<Pet[]>(`${this.URL}/type/${id_type}/gender/${gender}`);
  }
  
}
