import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//rutas
import { routing, appRoutingProviders } from './app.routing';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import { ErrorComponent } from './components/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosListComponent,
    ProductoAddComponent,
    ProductoDetailComponent,
    ProductoEditComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
