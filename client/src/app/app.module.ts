import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpCacheService } from './shared/http-cache.service';
import { HttpInterceptorModule } from './shared/interceptors/http-interceptor';
import { MaterialModuel } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { ProductService } from './shared/product.sevice';
import { NewProductComponent } from './store/new-product/new-product.component';
import { EditProductComponent } from './store/edit-product/edit-product.component';
import { UIService } from './shared/ui.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StoreComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpInterceptorModule,
    MaterialModuel,
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [HttpCacheService,ProductService,UIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
