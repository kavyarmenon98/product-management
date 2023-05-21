import { Component } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  itemList=JSON.parse(localStorage.getItem('productList') || '[]');
  product =JSON.parse(localStorage.getItem("product-details") || '{}');

}
