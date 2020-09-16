//Modulos para hacer peticiones ajax
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//Modelos
import { Product } from '../models/product'


//Url api
import { Global } from './global';

@Injectable()
export class ProductService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url
    }


    getDestacados(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'destacados', { headers: headers });
    }

    getMarca(marca): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.get(this.url + 'buscar?termino='+marca, { headers: headers });
    }

    
}