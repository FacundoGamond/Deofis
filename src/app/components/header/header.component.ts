import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//servicios
import { ProductService } from '../../services/product.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ProductService]
})
export class HeaderComponent implements OnInit {
  @Output() getMarcaHeader = new EventEmitter();

  public browser: string;
  public url: string;
  public productsFind: Array<any>
  public products: Array<any>

  constructor(private _projectService: ProductService) { this.url = Global.url; }

  ngOnInit(): void {
  }

  onSubmit(browserForm) {
    this.getMarca(this.browser)
  }

  getMarca(marca) {
    if (marca != "all") {
      this._projectService.getMarca(marca).subscribe(
        res => {
          if (res) {
            this.productsFind = res;
            this.getMarcaHeader.emit(this.productsFind)
          }
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.productsFind = []
      this.getMarcaHeader.emit(this.productsFind)
    }
  }
}
