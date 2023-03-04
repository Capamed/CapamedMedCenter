import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { LoginComponent } from './pages/login/login.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main-menu',
    component: MainMenuComponent,
  },
  {
    path: 'specialties',
    component: SpecialtiesComponent,
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
