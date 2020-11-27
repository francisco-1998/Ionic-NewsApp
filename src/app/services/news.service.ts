import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Noticia, RespuestaNoticia } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  page:number=-25;
  pageC: number = -25;
  constructor(private http:HttpClient) { }
  
  getTopHeadlines(){
    this.page=this.page+25;
    return this.http.get<RespuestaNoticia>(`http://api.mediastack.com/v1/news?access_key=433e605904f310965246482a8a11f24f&languages=es,en&offset=${this.page}`)
  }

  getNewsCategory(categoria:string){
    this.pageC=this.pageC+25;
    return this.http.get<RespuestaNoticia>(`http://api.mediastack.com/v1/news?access_key=433e605904f310965246482a8a11f24f&categories=${categoria}&languages=es,en&offset=${this.pageC}`)
  }
}


