import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Noticia } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class DataSqlLiteService {

  arregloNoticias: Noticia[] = [];

  constructor(private storage: Storage) {
    this.cargarNoticiasFavoritas();
  }

  guardarNoticiasFavoritas(noticia: Noticia) {

    const existe = this.arregloNoticias.find(noti => noti.title === noticia.title)

    if (!existe) {
      this.arregloNoticias.unshift(noticia);
      this.storage.set('favoritos', this.arregloNoticias);
    }
  }

  borrarNoticiasFavoritas(noticia: Noticia){
      this.arregloNoticias = this.arregloNoticias.filter(noti => noti.title !== noticia.title);
      this.storage.set('favoritos', this.arregloNoticias);
  }

  async cargarNoticiasFavoritas() {

    const favoritos = await this.storage.get('favoritos');

    if (favoritos) {
      this.arregloNoticias = favoritos;
    }

  }

}
