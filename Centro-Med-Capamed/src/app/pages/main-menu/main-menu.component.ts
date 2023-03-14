import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateNewRegisterComponent } from 'src/app/components/create-new-register/create-new-register.component';
import { EventEmitShowMenuDTO } from 'src/app/components/header/header.component';
import { CatalogMenuOptions } from 'src/app/enum/CatalogMenuOptions';
import { InformationMenuOptions } from 'src/app/models/InformationMenuOptions';
import { MsgToast } from 'src/app/models/MsgToast';
import { ReportService } from 'src/app/services/report.service';
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
    idMenuOption: '',
    route: ''
  };
  public showMenu: boolean = true;
  public showMenuItemsOptions: boolean = false;
  public tittlePage: string = "";
  public showModalCreate: boolean = false;
  public tittleModalCreate: string = "";
  public showMsjToast: boolean = false;
  public objShowNotifi: MsgToast | undefined;
  public typeMenuOption: string = "";

  constructor(private readonly _utilService: UtilService, private readonly _router: Router, private readonly _modalService: NgbModal) {
    this.getInformationMenuOptions();
  }

  getInformationMenuOptions() {
    this.arrayInfoMenuOptions = this._utilService.getInformationMenuOptions();
  }

  showInformationEvent(typeShow: boolean, idMenuOptions: string) {
    let objMenuOption: InformationMenuOptions = {
      tittle: '',
      image: '',
      text: '',
      idMenuOption: '',
      route: ''
    };
    if (typeShow === false) {
      this.classInformation = 'container fade-out';
      this.showInformation = false;
    } else {
      this.typeMenuOption = idMenuOptions;
      this.classInformation = 'container fade-in';
      objMenuOption = this.getObjFromArray(idMenuOptions);
      this.objInfoMenuOptionsTmp.idMenuOption = objMenuOption.idMenuOption;
      this.objInfoMenuOptionsTmp.tittle = objMenuOption.tittle;
      this.objInfoMenuOptionsTmp.image = objMenuOption.image;
      this.objInfoMenuOptionsTmp.text = objMenuOption.text;
      this.objInfoMenuOptionsTmp.route = objMenuOption.route;
      this.showInformation = true;
    }
  }

  routeNextPage(idMenuOptions: string) {
    let objMenuOption = this.getObjFromArray(idMenuOptions);
    this.tittlePage = objMenuOption.tittle;
    this._router.navigate([`/main-menu/${objMenuOption.route}`]);
    this.showMenu = false;
    this.showMenuItemsOptions = true;
  }

  getObjFromArray(idMenuOptions: string): InformationMenuOptions {
    return this.arrayInfoMenuOptions.find((e) => {
      return e.idMenuOption === idMenuOptions;
    }) || {
      tittle: '',
      image: '',
      text: '',
      idMenuOption: '',
      route: ''
    };
  }

  showMenuOrItemsMethod($event: EventEmitShowMenuDTO) {
    this.showMenu = $event.showMenu;
    this.showMenuItemsOptions = $event.showMenuItemsOptions;
  }

  showModalCreateRegister() {
    if (this.typeMenuOption === CatalogMenuOptions.ESPECIALIDAD) {
      const modal = this._modalService.open(CreateNewRegisterComponent, {
        size: "md",
        backdrop: "static",
        centered: true,
      });

      modal.componentInstance.typeMenuOption = this.typeMenuOption;
      modal.componentInstance.msgNotiFieldRequired.subscribe(
        (data: any) => {
          this.showNotificationRequired(data);
        }
      )
    }
  }

  refreshData() {
    if (this.typeMenuOption === CatalogMenuOptions.ESPECIALIDAD) {
      this._utilService.refreshData.emit(true);
    }
  }

  showNotificationRequired(objToast: MsgToast) {
    this.objShowNotifi = this._utilService.showToastNotification(objToast.message, objToast.code);
    this.showMsjToast = true;
    setTimeout(() => {
      this.showMsjToast = false;
    }, 1000);
  }
}
