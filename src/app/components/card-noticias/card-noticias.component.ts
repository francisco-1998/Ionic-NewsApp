import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../models/news.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.scss'],
})
export class CardNoticiasComponent implements OnInit {
  @Input() item:Noticia; 
  @Input() indice:number; 
  constructor(private iab: InAppBrowser, public actionSheetCtrl: ActionSheetController, private socialSharing: SocialSharing) { }

  ngOnInit() {}

  abrirNavegador(){
    console.log('Noticia:',this.item.url);
    const browser = this.iab.create(this.item.url,'_system');
  }

  async compartirRS(){
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.item.title,
            this.item.source,
            '',
            this.item.url
          )
        }
      }, {
        text: 'Añadir a favoritos',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Play clicked');
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  }




