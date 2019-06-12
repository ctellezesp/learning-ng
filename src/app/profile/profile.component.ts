import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public activeLang = 'es';
  datos = {};

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang(this.activeLang);

    /*const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');*/
  }

  ngOnInit() {
    this.datos = {name: "Carlos Erasmo", lastName: "Tellez Espejel", email: "ctellezesp@gmail.com", phone: 7717764999, school: "Tecnologico de Monterrey"};
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
