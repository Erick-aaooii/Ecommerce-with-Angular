import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Product } from '../models/product'
import { PRODUCTS } from '../db/mock-products'

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  getProdutos(): Observable<Product[]> {
    return of(PRODUCTS)
  }

  getProdutoPorId(id: number): Observable<Product | undefined> {
    const produto = PRODUCTS.find(p => p.id === id)
    return of(produto)
  }
}
