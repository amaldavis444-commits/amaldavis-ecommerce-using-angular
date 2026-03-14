import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
  product: any;
  id: number = 0;
 constructor(private apiService: ApiService,private cdr: ChangeDetectorRef,private route :ActivatedRoute) {}
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.apiService.getProductById(this.id).subscribe((data: any) => {
      this.product = data;
      this.cdr.detectChanges();
    });
}
}