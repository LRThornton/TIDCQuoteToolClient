import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.class';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl: string = "http://localhost:44393/api/items";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Item[]>{
    return this.http.get(`${this.baseUrl}`) as Observable<Item[]>;
  }

  get(id: number): Observable<Item> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Item>;

  }
  create(item: Item): Observable<Item> {
    return this.http.post(`${this.baseUrl}`, item) as Observable<Item>;
  }
  change(item: Item): Observable<any> {
    return this.http.put(`${this.baseUrl}/${item.id}`, item) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
  


