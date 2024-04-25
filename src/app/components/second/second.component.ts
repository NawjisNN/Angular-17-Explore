import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string;
  tags: string[];
  images: any[]; // Assuming you're storing image data as blobs or file references
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  products: Product[] = [];
  editMode: boolean = false;
  currentProduct: Product | null = null;

  prepareNewProduct(): void {
    this.editMode = true;
    this.currentProduct = { id: Date.now(), name: '', price: 0, description: '', brand: '', tags: [], images: [] };
  }

  saveProduct(): void {
    if (this.currentProduct) {
      const index = this.products.findIndex(p => p.id === this.currentProduct!.id);
      if (index === -1) {
        this.products.push(this.currentProduct); // Add a new product
      } else {
        this.products[index] = this.currentProduct; // Update an existing product
      }
      this.editMode = false;
      this.currentProduct = null; // Reset the current product
    }
  }

  editProduct(product: Product): void {
    this.editMode = true;
    this.currentProduct = {...product};
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  cancelEdit(): void {
    this.editMode = false;
    this.currentProduct = null;
  }

  // Implement the onUpload method
  onUpload(event: any): void {
    if (this.currentProduct && event.files) {
      for (let file of event.files) {
        this.currentProduct.images.push(file);
      }
    }
  }
}
