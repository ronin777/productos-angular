import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../model/producto';
import { GLOBAL } from '../services/global';

@Component({
    selector: 'producto-edit',
    templateUrl: '../view/producto-add.html',
    providers: [ProductoService]
})
export class ProductoEditComponent {

    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;
    public is_edit;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Modificar Producto';
        this.producto = new Producto(1, '', '', 1, '');
        this.is_edit = true;
    }

    ngOnInit() {
        console.log("Cargando Edicion Producto");
        console.log(this.titulo);
        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._productoService.getProducto(id).subscribe(
                response => {
                    if (response.code == 200) {
                        this.producto = response.data;
                    } else {
                        this._router.navigate(['/productos']);
                    }
                }, error => {
                    console.log(<any>error);
                }
            );
        });
    }


    onSubmit() {
        if (this.filesToUpload && this.filesToUpload.length >= 1) {
            this._productoService.makeFileRequest(GLOBAL.url + '/upload', [], this.filesToUpload)
                .then((result) => {
                    console.log('resultado ' + result);
                    this.resultUpload = result;
                    const arrayResult = this.resultUpload.split("\\\"");
                    this.producto.imagen = arrayResult[1];
                    this.updateProducto();
                }, error => {
                    console.log(error);
                });
        } else {
            this.updateProducto();
        }
    }

    updateProducto() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._productoService.editProducto(id, this.producto).subscribe(
                response => {
                    if (response.code == 200) {
                        this._router.navigate(['/producto', id]);
                    } else {
                        console.log(response);
                    }
                }, error => {
                    console.log(<any>error);
                }
            );

        });
    }

    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

}
