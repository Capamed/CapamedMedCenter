import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CardModule } from 'primeng/card';
import { UserLoginHttpService } from './services/user-login-http.service';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { UtilService } from './services/util.service';
import { ToastComponent } from './components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToastComponent
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
    ToastModule
  ],
  providers: [
    UserLoginHttpService,
    MessageService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
