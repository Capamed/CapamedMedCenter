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
import { ChipModule } from 'primeng/chip';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {FileUploadModule} from 'primeng/fileupload';
import { CreateNewRegisterComponent } from './components/create-new-register/create-new-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ImageModule} from 'primeng/image';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ReportService } from './services/report.service';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import {CarouselModule} from 'primeng/carousel';

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
    NursesComponent,
    CreateNewRegisterComponent
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
    BreadcrumbModule,
    ChipModule,
    AvatarModule,
    AvatarGroupModule,
    FileUploadModule,
    NgbModule,
    ImageModule,
    InputTextModule,
    InputTextareaModule,
    TableModule,
    ChartModule,
    DropdownModule,
    CarouselModule
  ],
  providers: [
    UserLoginHttpService,
    MessageService,
    UtilService,
    ReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
