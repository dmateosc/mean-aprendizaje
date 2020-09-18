import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para pode usar NgModel se debe cargar FormsModule es el que contiene la accion bilateral sobre las propiedes/metodos
import { FormsModule} from '@angular/forms';

//Para poder usar un client HTTP
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegoComponent} from './videojuego/videojuego.component';
import { ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { CalculadoraPipe} from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';



//declarations contiene todos los componentes que queremos usar
@NgModule({
  declarations: [
    AppComponent,
    VideoJuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [ // imports contiene todas las clases que vamos a usar y son utiles dentro del código
    BrowserModule,
    AppRoutingModule, //actulamente está se incluye en imports, porque es un export de app-routing.module
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

