import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../card/card";
import { ApiService } from '../api-service';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products: any[] = [];

  constructor(private apiService: ApiService,private cdr: ChangeDetectorRef) {}
  ngOnInit(){
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }
}