import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

//Tarea
//Cambiar los li del html por los pesenajes del srray

  personajes: Personaje[] = [
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegeta',
    poder: 8500
  }
];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  agregar(  ) {
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    console.log( this.nuevo );
    
    this.personajes.push( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
