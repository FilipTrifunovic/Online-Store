import { Component, OnInit } from '@angular/core';
import { buttonStateTrigger } from '../../shared/animations/registerbtn-animation';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../shared/product.sevice';
import { Product } from '../../shared/models/product.model';
import { Router } from '@angular/router';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  animations:[
    buttonStateTrigger
  ]
})
export class NewProductComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router,private uiservice:UIService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const body:Product=form.value;
    this.productService.postProduct(body)
    .subscribe(
      (data)=>{
        //console.log(data.)
        if(data.status===200){
          this.uiservice.showSnackbar('Product saved',null,1500)
          this.router.navigateByUrl('/')
        }
      },
      (error)=>{
        console.log(`Error Message: ${error}`)
        this.uiservice.showSnackbar('Product not Saved',null,2000)
        form.resetForm();
      }
    )
  }
}
