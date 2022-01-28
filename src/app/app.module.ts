import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C2Component } from './Components/c2/c2.component';
import { DocOnlineComponent } from './Components/doc-online/doc-online.component';
import { Docteur1Component } from './Components/docteur1/docteur1.component';
import { Docteur2Component } from './Components/docteur2/docteur2.component';
import { MesPatientsComponent } from './Components/mes-patients/mes-patients.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPatientComponent } from './mes-patients/add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    C2Component,
    Docteur1Component,
    Docteur2Component,
    MesPatientsComponent,
    DocOnlineComponent,
    AddPatientComponent

   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
