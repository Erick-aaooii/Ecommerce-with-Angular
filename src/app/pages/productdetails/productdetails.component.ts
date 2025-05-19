import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/products.service';
import { CarroselComponent } from "./components/productCarrosel/productCarrosel.component";
import { ProductFormComponent } from "./components/productForm/productForm.component"; 

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [ CarroselComponent, ProductFormComponent],
  templateUrl: './productdetails.component.html'
})
export class ProductdetailsComponent implements OnInit {
  produto: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProdutoPorId(id).subscribe(p => {
      this.produto = p;
    });
  }

}