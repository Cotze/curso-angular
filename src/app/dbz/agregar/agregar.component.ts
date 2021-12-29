import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../intarfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  //@Output() sirve para emitir eventos
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar(  ) {
    if ( this.nuevo.nombre.trim().length === 0 ){
      return;
    }
    //con emit se emite el evento del @Output
    this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
