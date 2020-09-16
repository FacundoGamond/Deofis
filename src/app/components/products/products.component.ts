import { Component, OnInit } from '@angular/core';

//servicios
import { ProductService } from '../../services/product.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  public products: Array<any>
  public url: string

  constructor(
    private _projectService: ProductService
  ) { 
    this.url = Global.url;
    this.products=[]
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._projectService.getDestacados().subscribe(
      res => {
        if (res) {
          this.products=res;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
