import { Component, OnInit } from '@angular/core';
import { MsgToast } from 'src/app/models/MsgToast';
import { Specialty } from 'src/app/models/Specialty';
import { SpecialtiesService } from 'src/app/services/specialties.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent implements OnInit {
  uploadedFiles: any[] = [];
  public arraySpecialties: Specialty[] = [];
  public showMsjToast: boolean = false;
  public objShowNotifi: MsgToast | undefined;

  constructor(private readonly _specialtiesService: SpecialtiesService, private readonly _utilService: UtilService) {

  }
  ngOnInit(): void {
    this.getAllSpecialties();
  }

  onBasicUpload(event: any) {
    console.log(event);

    // this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }

  getAllSpecialties() {
    const $resultGetAllSpec = this._specialtiesService.getAllSpecialties();
    $resultGetAllSpec.subscribe(
      (data: Specialty[]): void => {
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

  // updateSpeality(){
  //   let objUpdateSpeality = new Specialty(
  //     11,
  //     'Prueba1',

  //   );
  //   this._specialtiesService.updateSpeality().subscribe(
  //     (data: Specialty[]): void => {
  //       this.arraySpecialties = data;
  //     }
  //   )
  // }


  uploadImage(event: any, form: any) {
    const file = event.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.createSpeality(reader.result);
    };
  }

  createSpeality(blob: any) {
    let objUpdateSpeality = new Specialty(
      11,
      'Prueba100',
      blob, 'Esta es la descripción'
    );
    const $resultCreateSpec = this._specialtiesService.createSpeality(objUpdateSpeality).subscribe(
      () => {

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
        this.objShowNotifi = this._utilService.showToastNotification( `Se eliminó la especialidad ${objSpeciality.nombre} con éxito`, 200);
        this.showMsjToast = true;
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
}
