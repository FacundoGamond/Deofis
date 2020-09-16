import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//servicios
import { ProductService } from '../../services/product.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [ProductService]
})
export class SidebarComponent implements OnInit {
  @Output() getMarcaSidebar = new EventEmitter();

  public categoria: string
  public productsFind: Array<any>
  public products: Array<any>
  public url: string
  constructor(private _projectService: ProductService) {
    this.url = Global.url;
    this.products = []
    this.productsFind = []
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._projectService.getDestacados().subscribe(
      res => {
        if (res) {
          this.products = res;
        }
      },
      err => {
        console.log(err);
      }
    )

  }

  getMarca(marca) {
    if (marca != "all") {
      this._projectService.getMarca(marca).subscribe(
        res => {
          if (res) {
            this.productsFind = res;
            this.getMarcaSidebar.emit(this.productsFind)
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      console.log("igual")
      this.productsFind = []
      this.getMarcaSidebar.emit(this.productsFind)
    }

  }
}
