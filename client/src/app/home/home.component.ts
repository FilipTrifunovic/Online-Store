import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.sevice';
import { Product } from '../shared/models/product.model';
import { cardHoverStateTrigger } from '../shared/animations/prcard-animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    cardHoverStateTrigger
  ]
})
export class HomeComponent implements OnInit {
  products:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.fetchProducts().
    subscribe(
      (products)=>{
        this.products=products as Product[];
        console.log(this.products);

      }
    )
   
  }

}
