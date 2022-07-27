import { Component, OnInit } from '@angular/core';
import { FunkoService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  funkos: any;
  funkoService : FunkoService

  constructor(funkoService : FunkoService) {

    this.funkoService = funkoService;
   }

  ngOnInit(): void {

    this.funkos = this.funkoService.getFunko().subscribe((data => {
      this.funkos = data;
      console.log(this.funkos);
    }))
  }

}
