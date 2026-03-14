import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Product } from './product/product';
import { Productdetails } from './productdetails/productdetails';


export const routes: Routes = [
    {path:'',component:Home},
    {path:'contact',component:Contact},
    {path:'product',component:Product},
    {path:'product/:id',component:Productdetails}
];
