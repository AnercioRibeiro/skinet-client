import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://localhost:5125/api/';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Pagination<Product[]>>(this.baseUrl +'product?pageSize=50');
  }
}
