import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformationMenuOptions } from 'src/app/models/InformationMenuOptions';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent {
  public showInformation: boolean = false;
  public classInformation: string = "";
  public arrayInfoMenuOptions: InformationMenuOptions[] = [];
  public objInfoMenuOptionsTmp: InformationMenuOptions = {
    tittle: '',
    image: '',
    text: '',
    idMenuOption: ''
  };

  constructor(private readonly _utilService: UtilService, private readonly _router: Router) {
    this.getInformationMenuOptions();
    console.log(this.arrayInfoMenuOptions);
  }

  getInformationMenuOptions() {
    this.arrayInfoMenuOptions = this._utilService.getInformationMenuOptions();
  }

  showInformationEvent(typeShow: boolean, idMenuOptions: string) {
    let objMenuOption: InformationMenuOptions = {
      tittle: '',
      image: '',
      text: '',
      idMenuOption: ''
    };
    if (typeShow === false) {
      this.classInformation = 'container fade-out';
      this.showInformation = false;
    } else {
      this.classInformation = 'container fade-in';
      objMenuOption = this.arrayInfoMenuOptions.find((e) => {
        return e.idMenuOption === idMenuOptions;
      }) || {
        tittle: '',
        image: '',
        text: '',
        idMenuOption: ''
      };

      this.objInfoMenuOptionsTmp.idMenuOption = objMenuOption.idMenuOption;
      this.objInfoMenuOptionsTmp.tittle = objMenuOption.tittle;
      this.objInfoMenuOptionsTmp.image = objMenuOption.image;
      this.objInfoMenuOptionsTmp.text = objMenuOption.text;
      this.showInformation = true;
    }
  }

  r(){
    const url = ['/doctors'];
    this._router.navigate(url);
  }

}
