import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component ({
    selector: 'productos-list',
    templateUrl: '../view/productos-list.html'
})
export class ProductosListComponent {

    public titulo: String;

    constructor(){
        this.titulo = 'Productos';
    }

    ngOnInit() {
        console.log('Cargar de Productos');
    }
}