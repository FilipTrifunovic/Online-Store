import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Product } from '../../shared/models/product.model';
import { ProductService } from '../../shared/product.sevice';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit,AfterViewInit {

  displayedColumns:string[]=['name','category','price'];
  dataSource= new MatTableDataSource<Product>();

  @ViewChild(MatSort) sort:MatSort;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.fetchProducts()
    .subscribe(
      data=>{
        this.dataSource.data=data as Product[];
        console.log(data);
      }
    )
  }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
  }

  onClick(row){
    console.log(row);
  }

  doFilter(filterValue:String){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
