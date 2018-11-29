import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';
import { GLOBAL } from './global';

@Injectable()
export class ProductoService {

    public url: String;

    constructor(
        public _http: Http
    ){
        this.url = GLOBAL.url;
    }

    getProductos(){
        return this._http.get(this.url+'/productos').map(res => res.json());
    }

}