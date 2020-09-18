import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZapatillasComponent} from './zapatillas/zapatillas.component'
import { VideoJuegoComponent} from './videojuego/videojuego.component'
import { CursosComponent} from './cursos/cursos.component'
import { HomeComponent } from './home/home.component'
import { ExternoComponent} from './externo/externo.component'
import { ContactoComponent } from './contacto/contacto.component';
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'zapatillas', component: ZapatillasComponent},
  {path : "videojuegos", component: VideoJuegoComponent},
  {path : "externo", component: ExternoComponent},
  {path : "cursos", component: CursosComponent},
  {path : "cursos/:nombre", component: CursosComponent},
  {path : "contacto", component: ContactoComponent},
  {path : "cursos/:nombre/:followers", component: CursosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*Actualmente con Angular 10 esto está creado para que añadas los path a tu gusto e invoque al componente adecuado*/