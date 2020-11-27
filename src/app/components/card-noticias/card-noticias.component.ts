import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../models/news.model';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.scss'],
})
export class CardNoticiasComponent implements OnInit {
  @Input() item:Noticia; 
  @Input() indice:number; 
  constructor() { }

  ngOnInit() {}

}
