import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./models/product.model";

import { map, pluck,flatMap, catchError } from 'rxjs/operators';
import { Observable,from, of, throwError } from "rxjs";


@Injectable()
export class ProductService {
    products:Product[]
    constructor(private http:HttpClient){}

    fetchProducts():Observable<Product[]>{
      return  this.http.get<any>('http://localhost:4000/products')  
      .pipe(
        map((response)=>{
            return response.data;
        } )
      )
    }

    postProduct(body:Product){
        return this.http.post<any>('http://localhost:4000/products',body)

        
    }
} 