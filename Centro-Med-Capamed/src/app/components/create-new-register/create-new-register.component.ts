import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CatalogMenuOptions } from 'src/app/enum/CatalogMenuOptions';
import { MsgToast } from 'src/app/models/MsgToast';
import { Specialty } from 'src/app/models/Specialty';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-create-new-register',
  templateUrl: './create-new-register.component.html',
  styleUrls: ['./create-new-register.component.scss']
})
export class CreateNewRegisterComponent {

  @Input() typeMenuOption: string = "";
  @Input() showFormCreate: boolean = true;

  @Output() emiter: EventEmitter<boolean> = new EventEmitter();
  @Output() msg: string = "";
  @Input() tittle = 'Confirmación';
  @Input() descriptionAccepted = 'Si';
  @Input() descriptionCancel = 'No';
  @Output() msgNotiFieldRequired: EventEmitter<MsgToast> = new EventEmitter();

  public showModalSpeciality: boolean = false;
  public showModalDoctor: boolean = false;
  public showModalPatient: boolean = false;
  public showModalNurse: boolean = false;
  public objImgUpload: any;
  public file: any;
  public reader: any;
  public showMsgValidateName: boolean = false;
  public showMsgValidateDes: boolean = false;
  public showMsgValidateImg: boolean = false;
  public hiddenModal: boolean = false;
  public createNewSpecialty: Specialty = {
    id_especialidad: undefined,
    nombre: '',
    img: undefined,
    descripcion: ''
  }

  constructor(
    private readonly _activeModal: NgbActiveModal,
    private readonly _specialityService: SpecialtiesService,
    private readonly _utilService: UtilService
  ) {
  }

  closeModal() {
    this._activeModal.dismiss();
  }

  accepted() {
    this.emiter.emit(true);
    this.closeModal();
  }

  cancel() {
    this.emiter.emit(false);
    this.closeModal();
  }

  ngOnInit(): void {
    this.showModalSpeciality = false;
    this.showModalDoctor = false;
    this.showModalPatient = false;
    this.showModalNurse = false;
    switch (this.typeMenuOption) {
      case CatalogMenuOptions.ESPECIALIDAD:
        this.showModalSpeciality = true;
        break;
      case CatalogMenuOptions.MEDICO:
        this.showModalDoctor = true;
        break;
      case CatalogMenuOptions.PACIENTE:
        this.showModalPatient = true;
        break;
      case CatalogMenuOptions.ENFERMERO:
        this.showModalNurse = true;
        break;
      default:
        break;
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

  creatNewSpeciality(createSpeciality: Specialty): void {
    this.showMsgValidateName = false;
    this.showMsgValidateDes = false;
    this.showMsgValidateImg = false;
    if (createSpeciality === null || createSpeciality === undefined) {
      let objToast: MsgToast = {
        message: 'Complete los campos requeridos',
        code: 400,
        typeNotification: ''
      }
      this.msgNotiFieldRequired.emit(objToast);
    } else {
      if ((createSpeciality.nombre === undefined || createSpeciality.nombre === undefined || createSpeciality.nombre === "") || (createSpeciality.descripcion === undefined || createSpeciality.descripcion === undefined || createSpeciality.descripcion === "") || (this.objImgUpload === undefined || this.objImgUpload === undefined || this.objImgUpload === "")) {
        let objToast: MsgToast = {
          message: 'Complete los campos requeridos',
          code: 400,
          typeNotification: ''
        }
        this.msgNotiFieldRequired.emit(objToast);
        if (createSpeciality.nombre === undefined || createSpeciality.nombre === undefined || createSpeciality.nombre === "") {
          this.showMsgValidateName = true;
        } else {
          this.showMsgValidateName = false;
        }
        if (createSpeciality.descripcion === undefined || createSpeciality.descripcion === undefined || createSpeciality.descripcion === "") {
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
        createSpeciality.img = this.objImgUpload;
        createSpeciality.id_especialidad = "-1";
        const $respCreateSpeciality = this._specialityService.createSpeality(createSpeciality).subscribe(
          (): void => {
            let objToast: MsgToast = {
              message: 'Se creo la especialidad con éxito',
              code: 200,
              typeNotification: ''
            }
            this.msgNotiFieldRequired.emit(objToast);
            this.closeModal();
            this.refreshData();
          }, (error: any) => {
            let objToast: MsgToast = {
              message: 'No se pudo crear la nueva especialidad',
              code: 400,
              typeNotification: ''
            }
            this.msgNotiFieldRequired.emit(objToast);
          }
        )
      }
    }
  }

  refreshData() {
    this._utilService.refreshData.emit(true);
  }
}
