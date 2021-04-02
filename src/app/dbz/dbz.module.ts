import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { NuevoPersonajeComponent } from './nuevo-personaje/nuevo-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    NuevoPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
