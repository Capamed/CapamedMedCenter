import { Component } from '@angular/core';
import { Nurse } from 'src/app/models/Nurse';
import { NursesService } from 'src/app/services/nurses.service';

@Component({
  selector: 'app-nurses',
  templateUrl: './nurses.component.html',
  styleUrls: ['./nurses.component.scss']
})
export class NursesComponent {
  responsiveOptions: any;
  lstNurse: Nurse[] = [];
  objNurse: Nurse = {
    id_enfermero: '',
    numero_identificacion: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo_electronico: '',
    img: 0
  };

  constructor(private readonly _nurseService: NursesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this._nurseService.getAllNurses().subscribe(
      (data: Nurse[]) => {
        data.forEach(element => {
          element.img = this.getRandomInt(8);
        });
        this.lstNurse = data;
      }
    )
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  viewNurse(viewNurse: Nurse) {
    this.objNurse = viewNurse;
  }

  deleteNurse(deleteNurse: string) {

  }

}
