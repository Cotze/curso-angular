import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../intarfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //Al poner el input le decimos a Angular que el arreglo personajes
  //van a venir del componente padre, osea quien lo utilice puede mandar
  //la propiedad personajes
  @Input() 
  personajes: Personaje[] = [];
}
