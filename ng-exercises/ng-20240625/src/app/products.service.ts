import { Injectable } from '@angular/core';

export interface NewProduct {
  productName: string,
  productPhotoUrl: string
}

export interface Product extends NewProduct {
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      productName: 'Buzzly',
      productPhotoUrl: 'https://www.buzz.com/'
    }
  ];
  maxProductId: number = 1;

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(newProduct: NewProduct) {
    this.maxProductId += 1;

    const productToAdd: Product = { 
      id: this.maxProductId,
      ...newProduct 
    };

    this.products.push(productToAdd);

    return productToAdd;    
  }
}
