import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../models/news.model';

@Component({
  selector: 'app-list-card-noticias',
  templateUrl: './list-card-noticias.component.html',
  styleUrls: ['./list-card-noticias.component.scss'],
})
export class ListCardNoticiasComponent implements OnInit {

  @Input() noticias:Noticia[]=[];
  constructor() { }

  ngOnInit() {}

}
