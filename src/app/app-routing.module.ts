import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocOnlineComponent } from './Components/doc-online/doc-online.component';
;

import { Docteur1Component } from './Components/docteur1/docteur1.component';
import { Docteur2Component } from './Components/docteur2/docteur2.component';
import { MesPatientsComponent } from './Components/mes-patients/mes-patients.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { AddPatientComponent } from './mes-patients/add-patient/add-patient.component';

const routes: Routes = [
  {path:"mespatients",component:MesPatientsComponent},
  {path:"docteur1",component:Docteur1Component},
  {path:"docteur2",component:Docteur2Component},
  {path:"docOnline",component:DocOnlineComponent},
  {path:"addPatient",component:AddPatientComponent},
  {path:" ",component:PrincipalComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
