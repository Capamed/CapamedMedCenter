import { Component, Input, OnInit } from '@angular/core';
import { MsgToast } from 'src/app/models/MsgToast';
import { Specialty } from 'src/app/models/Specialty';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import { UtilService } from 'src/app/services/util.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {
  @Input() refresh: boolean = true;
  public uploadedFiles: any[] = [];
  public arraySpecialties: Specialty[] = [];
  public showMsjToast: boolean = false;
  public objShowNotifi: MsgToast | undefined;
  public objSpeciality: Specialty = {
    id_especialidad: '',
    nombre: '',
    img: '',
    descripcion: ''
  };
  public objTmpUpdateSpeciality: Specialty = {
    id_especialidad: '',
    nombre: '',
    img: '',
    descripcion: ''
  };

  public objImgUpload: any;
  public file: any;
  public reader: any;
  public showMsgValidateName: boolean = false;
  public showMsgValidateDes: boolean = false;
  public showMsgValidateImg: boolean = false;
  public disabledEditSpeciality: boolean = false;


  constructor(private readonly _specialtiesService: SpecialtiesService, private readonly _utilService: UtilService, private readonly _sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
    this.getAllSpecialties();
    this._utilService.refreshData.subscribe(
      (e: boolean) => {
        if (e)
          this.getAllSpecialties();
      }
    )
  }

  viewInforSpeciality(objTmpSpeciality: Specialty) {
    this.disabledEditSpeciality = false;
    this.objSpeciality = objTmpSpeciality;
    this.objTmpUpdateSpeciality.id_especialidad = this.objSpeciality.id_especialidad;
  }

  getAllSpecialties() {
    const $resultGetAllSpec = this._specialtiesService.getAllSpecialties();
    $resultGetAllSpec.subscribe(
      (data: Specialty[]): void => {
        data.forEach(e => {
          e.img = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
            + e.img);
        });
        this.arraySpecialties = data;
      },
      (error: any) => {
        this.objShowNotifi = this._utilService.showToastNotification('Error al obtener todas las especialidades', 500);
        this.showMsjToast = true;
        setTimeout(() => {
          this.showMsjToast = false;
        }, 500);
      }
    )
  }

  updateSpeality(objUpdateSpeality: Specialty) {
    this.showMsgValidateName = false;
    this.showMsgValidateDes = false;
    this.showMsgValidateImg = false;
    if (!this.disabledEditSpeciality) {
      if (objUpdateSpeality === null || objUpdateSpeality === undefined) {
        this.objShowNotifi = this._utilService.showToastNotification('Complete los campos requeridos', 400);
        this.showMsjToast = true;
        setTimeout(() => {
          this.showMsjToast = false;
        }, 1000);
      } else {
        if ((objUpdateSpeality.nombre === undefined || objUpdateSpeality.nombre === undefined || objUpdateSpeality.nombre === "") || (objUpdateSpeality.descripcion === undefined || objUpdateSpeality.descripcion === undefined || objUpdateSpeality.descripcion === "") || (this.objImgUpload === undefined || this.objImgUpload === undefined || this.objImgUpload === "")) {
          this.objShowNotifi = this._utilService.showToastNotification('Complete los campos requeridos', 400);
          this.showMsjToast = true;
          setTimeout(() => {
            this.showMsjToast = false;
          }, 1000);
          if (objUpdateSpeality.nombre === undefined || objUpdateSpeality.nombre === undefined || objUpdateSpeality.nombre === "") {
            this.showMsgValidateName = true;
          } else {
            this.showMsgValidateName = false;
          }
          if (objUpdateSpeality.descripcion === undefined || objUpdateSpeality.descripcion === undefined || objUpdateSpeality.descripcion === "") {
            this.showMsgValidateDes = true;
          } else {
            this.showMsgValidateDes = false;
          }
          if (this.objImgUpload === undefined || this.objImgUpload === null || this.objImgUpload === "") {
            this.showMsgValidateImg = true;
          } else {
            this.showMsgValidateImg = false;
          }
        } else {
          objUpdateSpeality.img = this.objImgUpload;
          const $resultUpdateSpec = this._specialtiesService.updateSpeality(objUpdateSpeality).subscribe(
            (): void => {
              this.objShowNotifi = this._utilService.showToastNotification(`Se actualizó la especialidad ${objUpdateSpeality.nombre} con éxito`, 200);
              this.showMsjToast = true;
              this.getAllSpecialties();
              this.disabledEditSpeciality = true;
              setTimeout(() => {
                this.showMsjToast = false;
                this.showMsgValidateName = false;
                this.showMsgValidateDes = false;
                this.cleanData();
              }, 1000);
            }, (error: any) => {
              this.objShowNotifi = this._utilService.showToastNotification('Error al actualizar la especialidad', 500);
              this.showMsjToast = true;
              setTimeout(() => {
                this.showMsjToast = false;
                this.showMsgValidateName = false;
                this.showMsgValidateDes = false;
                this.cleanData();
              }, 1000);
            }
          )
        }
      }
    }
  }

  uploadImage(event: any) {
    this.file = event.files[0];
    this.reader = new FileReader();
    this.reader.readAsDataURL(this.file);
    this.reader.onload = () => {
      this.objImgUpload = this.reader.result?.toString().split(",")[1];
    };
  }

  createSpeality(objCreateSpeality: Specialty) {
    const $resultCreateSpec = this._specialtiesService.createSpeality(objCreateSpeality).subscribe(
      () => {
        this.objShowNotifi = this._utilService.showToastNotification(`Se creó la especialidad ${objCreateSpeality.nombre} con éxito`, 200);
        this.showMsjToast = true;
        this.getAllSpecialties();
        setTimeout(() => {
          this.showMsjToast = false;
        }, 1000);
      }, (error: any) => {
        this.objShowNotifi = this._utilService.showToastNotification('Error al crear la nueva especialidad', 500);
        this.showMsjToast = true;
        setTimeout(() => {
          this.showMsjToast = false;
        }, 1000);
      }
    )
  }

  deleteSpeciality(objSpeciality: Specialty) {
    let objIdSpeciality: any = {
      id_especialidad: objSpeciality.id_especialidad
    };
    const $resultDeleteSpec = this._specialtiesService.deleteSpeciality(objIdSpeciality);
    $resultDeleteSpec.subscribe(
      () => {
        this.objShowNotifi = this._utilService.showToastNotification(`Se eliminó la especialidad ${objSpeciality.nombre} con éxito`, 200);
        this.showMsjToast = true;
        this.getAllSpecialties();
        setTimeout(() => {
          this.showMsjToast = false;
        }, 1000);
      }, (error: any) => {
        this.objShowNotifi = this._utilService.showToastNotification('Error al borrar la especialidad', 500);
        this.showMsjToast = true;
        setTimeout(() => {
          this.showMsjToast = false;
        }, 1000);
      }
    )
  }

  cleanData() {
    this.file = null;
    this.reader = null;
    this.objTmpUpdateSpeciality = {
      id_especialidad: '',
      nombre: '',
      img: '',
      descripcion: ''
    };
  }

}
