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
  remoteUrl: string = 'http://127.0.0.1:8000/api/products/'
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

  async fetchProducts() {
    try {
      const response = await fetch(this.remoteUrl);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
      this.products = data;

    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
    
    return this.products;
  }

}
