import { Injectable } from '@angular/core';
import { InformationMenuOptions } from '../models/InformationMenuOptions';
import { MsgToast } from '../models/MsgToast';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  showToastNotification(message: string, code: number): MsgToast {
    let typeNotification: string = "";
    if (code >= 200 && code < 300) {
      typeNotification = 'success';
    } else if (code === 401 || code >= 500) {
      typeNotification = 'error';
    } else {
      typeNotification = 'warning';
    }
    return new MsgToast(message, code, typeNotification);
  }

  getInformationMenuOptions(): InformationMenuOptions[] {
    let arrayInfoMenuOptions: InformationMenuOptions[] = [];
    arrayInfoMenuOptions.push(
    new InformationMenuOptions('ESP','Especialidades', 'specialties.jpg', 'Somos el único centro médico con más de 35 especialidades a disposición del usuario.','/specialties'),
    new InformationMenuOptions('MED','Médicos', 'doctor-options.jpg', 'Los profesionales de salud se dedican al estudio de la vida, la salud, las enfermedades y la muerte del ser humano, e implica el arte de ejercer tal conocimiento técnico para el mantenimiento y recuperación de la salud, aplicándolo al diagnóstico, tratamiento y prevención de las enfermedades.','/doctors'),
    new InformationMenuOptions('ENF','Enfermeros', 'nurse.webp', 'La enfermería abarca el cuidado autónomo y colaborativo de personas de todas las edades, familias, grupos y comunidades, enfermos o sanos y en todos los entornos.','/nurses'),
    new InformationMenuOptions('PAC','Pacientes', 'pacient.jpeg', 'El paciente es aquella persona que sufre de dolor y malestar y, por ende, solicita asistencia médica y, está sometida a cuidados profesionales para la mejoría de su salud.','/patients'),
    new InformationMenuOptions('AGE','Agendar', 'agend.jpeg', 'La cita de atención médica es el trámite que permite agendar una atención, identificar al paciente, comprometer al especialista de la salud, proveer insumos y medicamentos y planificar la prestación de servicios de salud a un paciente en un área determinada de la medicina.','/schedule'),
    new InformationMenuOptions('REP','Reportes', 'report.webp', 'Un reporte de caso es un tipo de estudio observacional que presenta detalladamente proble mas médicos de un paciente único y de características únicas. Organizan y vuelven a narrar lo que ocurrió en la historia clínica, evolución de la enfermedad, cuidados médicos instituidos y los resultados obtenidos.','/reports'));
    return arrayInfoMenuOptions;
  }
}
