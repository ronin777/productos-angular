import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';

@Component({
    selector: 'productos-list',
    templateUrl: '../view/productos-list.html',
    providers: [ProductoService]
})
export class ProductosListComponent {

    public titulo: String;
    public productos: Producto[];
    public confirmado;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.titulo = 'Productos';
    }

    ngOnInit() {
        console.log('Cargar de Productos');
        this.getProductos();
        this.confirmado = null;
    }

    confirmarEliminacion(id) {
        this.confirmado = id;
    }

    cancelarElimacion() {
        this.confirmado = null;
    }

    getProductos() {
        this._productoService.getProductos().subscribe(
            result => {
                if (result.code != 200) {
                    console.log(result);
                } else {
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    onDeleteProducto(id) {
        this._productoService.deleteProducto(id).subscribe(
            response => {
                if (response.code == 200) {
                    console.log('Elimado correctamente');
                    this.getProductos();
                } else {
                    alert('Error en el Servidor');
                }
            }, error => {
                console.log(<any>error);
            }
        );
    }

}