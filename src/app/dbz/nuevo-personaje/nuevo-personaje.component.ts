import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent implements OnInit {

  @Input('personajes') personajes: Personajes[] = [];
  @Input('nuevoPersonaje') nuevoPersonaje = { 
    nombre: '',
    poder: 0
  };

  constructor() { }

  ngOnInit(): void {
  }
   // Agrega un personaje
   agregaPersonaje = (): void =>{
    
    if(this.nuevoPersonaje.nombre.trim().length === 0) {return};

    console.log(this.nuevoPersonaje);

    this.personajes.push( this.nuevoPersonaje );
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }

}
