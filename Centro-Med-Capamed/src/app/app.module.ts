import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardModule } from 'primeng/card';
import { UserLoginHttpService } from './services/user-login-http.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UtilService } from './services/util.service';
import { ToastComponent } from './components/toast/toast.component';
import { HeaderComponent } from './components/header/header.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SpecialtiesComponent } from './pages/specialties/specialties.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { NursesComponent } from './pages/nurses/nurses.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToastComponent,
    HeaderComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    SpecialtiesComponent,
    DoctorsComponent,
    PatientsComponent,
    ScheduleComponent,
    ReportsComponent,
    NursesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    MenubarModule,
    BreadcrumbModule
  ],
  providers: [
    UserLoginHttpService,
    MessageService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
