import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListCardNoticiasComponent } from './list-card-noticias/list-card-noticias.component';
import { CardNoticiasComponent } from './card-noticias/card-noticias.component';



@NgModule({
  declarations: [ListCardNoticiasComponent,CardNoticiasComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ListCardNoticiasComponent
  ]
})
export class ComponentsModule { }
