import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category.class';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: string = "http://172.20.131.5:81/api/categories";
  //  baseUrl: string = "http://localhost:44393/api/categories";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Category[]>{
    return this.http.get(`${this.baseUrl}`) as Observable<Category[]>;
  }

  get(id: number): Observable<Category> {
    return this.http.get(`${this.baseUrl}/${id}`) as Observable<Category>;

  }
  create(category: Category): Observable<Category> {
    return this.http.post(`${this.baseUrl}`, category) as Observable<Category>;
  }
  change(category: Category): Observable<any> {
    return this.http.put(`${this.baseUrl}/${category.id}`, category) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) as Observable<any>;
  }
}
  


