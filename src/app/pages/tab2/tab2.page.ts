import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Noticia } from '../../models/news.model';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  dataNews: Noticia[] = [];
  constructor(private news: NewsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.cargarNoticias();
  }

  loadMoreData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this.news.getTopHeadlines().subscribe(resp => {
      if (resp.data.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.dataNews.push(...resp.data);
      if (event) {
        event.target.complete();
      }
    })
  }

  cargarNoticias2(event?) {
    this.dataNews = []
    this.news.getTopHeadlines().subscribe(resp => {
      if (resp.data.length === 0) {
        event.target.disabled = true;
        event.target.complete();
        return;
      }
      this.dataNews.push(...resp.data);
      if (event) {
        event.target.complete();
      }
    })
  }

  doRefresh(event){
    setTimeout(() => {
      this.cargarNoticias2();
      event.target.complete();
    }, 250);
  }

}
