import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { AddTransectionComponent } from './add-transection/add-transection.component';
import { DebitComponent } from './add-transection/debit/debit.component';
import { CreditComponent } from './add-transection/credit/credit.component';
import {MatTabsModule} from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { EditTransectionComponent } from './edit-transection/edit-transection.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    CreateAccountComponent,
    NavbarComponent,
    
    AddTransectionComponent,
    DebitComponent,
    CreditComponent,
    ManagerLoginComponent,
    EditTransectionComponent,
    ProfileImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatTabsModule,
    BrowserAnimationsModule,
    

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
