import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

   // Recoger los datos del formulario
  nuevoPersonaje = {
    nombre: 'Yayiorbe',
    poder: 5
  }

  // Listado de personajes
  personajes: Personajes[] = [
    {
      nombre: 'Goku',
      poder: 1345000
    },
    {
      nombre: 'Gohan',
      poder: 1111000
    },
    {
      nombre: 'Krilin',
      poder: 50000
    }
  ];

  addNewCharacter = ( character: Personajes ): void =>{
    console.log('LLego a addNewCharacter');
    console.log('character: ', character);
    this.personajes.push( character );
  }

}
