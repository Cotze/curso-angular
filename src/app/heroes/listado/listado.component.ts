import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  
  heroes: string[] = [ 'Spider-Man', 'Iron-Man', 'Hulk', 'Thor', 'Spider-Wen' ];

  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || ''; 
    
    
  }
}
