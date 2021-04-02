import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personajes } from '../interfaces/personajes';


@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrls: ['./nuevo-personaje.component.css']
})
export class NuevoPersonajeComponent implements OnInit {

  @Input('nuevoPersonaje') nuevoPersonaje = { 
    nombre: '',
    poder: 0
  };

  @Output() onNuevoPersonaje: EventEmitter<Personajes> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
   // Agrega un personaje
   agregaPersonaje = (): void =>{
    
    if(this.nuevoPersonaje.nombre.trim().length === 0) {return};

    console.log(this.nuevoPersonaje);
    this.onNuevoPersonaje.emit( this.nuevoPersonaje );

    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }

}
