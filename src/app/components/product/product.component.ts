import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  //@Input() product!: Product;

  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
