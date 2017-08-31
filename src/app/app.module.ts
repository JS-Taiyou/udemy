import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RecetaListaComponent } from './recetas/receta-lista/receta-lista.component';
import { RecetaDetalladaComponent } from './recetas/receta-detallada/receta-detallada.component';
import { RecetaInstanciaComponent } from './recetas/receta-lista/receta-instancia/receta-instancia.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { EdicionComprasComponent } from './lista-compras/edicion-compras/edicion-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    RecetasComponent,
    RecetaListaComponent,
    RecetaDetalladaComponent,
    RecetaInstanciaComponent,
    ListaComprasComponent,
    EdicionComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
