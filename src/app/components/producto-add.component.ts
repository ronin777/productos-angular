import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'producto-add',
    templateUrl: '../view/producto-add.html',
    providers: [ProductoService]
})
export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Agragar Producto';
        this.producto = new Producto(0, '', '', 0, '');
    }

    ngOnInit(){
        console.log('Iniciando productoAddComponent');
    }

    onSubmit(){
        console.log(this.producto);
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if(response.code == 200) {
                    this._router.navigate(['/productos']);
                } else {
                    console.log(response);
                }
            }, error => {
                console.log(<any>error);
            }
        );

    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

}