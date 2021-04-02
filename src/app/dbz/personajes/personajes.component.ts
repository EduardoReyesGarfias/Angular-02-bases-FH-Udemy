import { Component, Input, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

   // Listado de personajes
   @Input('data') personajes: Personajes[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
