import { NgModule } from "@angular/core";
import { Routes, RouterModule } from'@angular/router';
import { RegisterComponent } from "./authentication/register/register.component";
import { LoginComponent } from "./authentication/login/login.component";
import { HomeComponent } from "./home/home.component";
import { StoreComponent } from "./store/store.component";
import { NewProductComponent } from "./store/new-product/new-product.component";
import { EditProductComponent } from "./store/edit-product/edit-product.component";

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'store',component:StoreComponent},
    {path:'store/newProduct',component:NewProductComponent},
    {path:'store/editProduct',component:EditProductComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}