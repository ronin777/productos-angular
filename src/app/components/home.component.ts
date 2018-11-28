import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../view/home.html'
  })
export class HomeComponent {

    public titulo: String;

    constructor(){
        this.titulo = 'WeApp de Productos';
    }

    ngOnInit() {
        console.log('Se ha iniciado el Componente Home');
    }
}
