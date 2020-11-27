import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Noticia } from 'src/app/models/news.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {


  @ViewChild(IonSegment) segment:IonSegment;

  categorias = [ "entertainment", "health", "science", "sports", "technology","business",  ]
  categorizadas:Noticia[]=[];
  constructor(private newService:NewsService) {}

  ngOnInit(): void {
    this.cargarNoticiasCategorizadas("entertainment");
  }

  segmentChanged(event){
    console.log(event.detail.value);
    this.categorizadas = [];
    this.cargarNoticiasCategorizadas(event.detail.value);
  }


  loadData(event){
    this.cargarNoticiasCategorizadas(this.segment.value, event);
  }


  cargarNoticiasCategorizadas(categoria:string, event?){
    this.newService.getNewsCategory(categoria).subscribe(resp=>{
      this.categorizadas.push(...resp.data);
      console.log(resp.data);
      if (event) {
        event.target.complete();
      }
    })
  }

}
