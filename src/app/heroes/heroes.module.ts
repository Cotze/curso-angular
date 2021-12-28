import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        //Todos los componetes que se guardan en el modulo creado
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //Son todos los componentes que queramos exportar de la aplicación
        ListadoComponent
    ],
    imports: [
        //Aqui van todos los modulos unicamente
        CommonModule
    ]
})

export class HeroesModule {}