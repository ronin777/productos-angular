import { Component } from '@angular/core';

@Component({
    selector: 'error',
    templateUrl: '../view/error.html'
  })

export class ErrorComponent {

    public titulo: string;

    constructor(){
        this.titulo = 'Error|| Página no encontrada';
    }
    
    ngOnInit() {
        console.log('Se ha iniciado Página de Error');
    }
}