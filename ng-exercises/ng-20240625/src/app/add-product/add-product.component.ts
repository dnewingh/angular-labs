import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewProduct, Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: `
    <section id="add-product">
      <header>
        <h1>Add Product</h1>
      </header>
      <main>        
        <div class="mb-3">
          <label for="input-product-name" class="form-label">Name</label>
          <input type="text" class="form-control" id="input-product-name" placeholder="Wood Donkey" required [(ngModel)]='inputProduct.productName'>
        </div>
        <div class="mb-3">
          <label for="input-product-photo-url" class="form-label">Photo URL</label>
          <input type="text" class="form-control" id="input-product-photo-url" [(ngModel)]='inputProduct.productPhotoUrl'>
        </div>
        <button class="btn btn-primary" (click)="submitNewProduct()">Submit</button>        
      </main>
    </section>

    <section id="all-products" class="mt-4">
      <header>
        <h1>All Products</h1>
      </header>
      <main>
        <pre>
          {{ products | json }}
        </pre>
      </main>
    </section>

  `,
  styles: `
    button {
      display: inline-block;
      width: 100%
    }
  `
})
export class AddProductComponent {
  productsService: ProductsService;
  inputProduct: NewProduct = {
    productName: '',
    productPhotoUrl: ''
  };

  products: Product[] = [];

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
   }

   async ngOnInit() {
    this.products = await this.productsService.fetchProducts();
   }

  submitNewProduct() {
    //console.log(this.inputProduct)
    const addedProduct = this.productsService.addProduct(this.inputProduct);
    //console.log(addedProduct);
    this.products = this.productsService.getProducts();
  }
}
