import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Patient } from 'src/app/models/patient.model';
import { PatientsService } from 'src/app/services/patients.service';
import { AppDataState, DataStateEnum } from 'src/state/Patient.state';

@Component({
  selector: 'app-mes-patients',
  templateUrl: './mes-patients.component.html',
  styleUrls: ['./mes-patients.component.css']
})
export class MesPatientsComponent implements OnInit {
  patients$:Observable<AppDataState<Patient[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private patientService:PatientsService) { }

  ngOnInit(): void {
  }


  onGetAllPatients(){
  console.log("strat...")
  this.patients$=this.patientService.getAllPatients()
  
    .pipe(
      map(data=>{console.log(data);
        return({dataState:DataStateEnum.LOADED,data:data})
      }),
       startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))

    )
  
  }

  onGetPatientVaccine(){
    console.log("strat...")
    this.patients$=this.patientService.getPatientvacciner()
    
      .pipe(
        map(data=>{console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})
        }),
         startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  
      )

  }

  onGetPatient(){
    console.log("strat...")
    this.patients$=this.patientService.getPatientSuivi()
    
      .pipe(
        map(data=>{console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})
        }),
         startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  
      )

  }

  onSearch(dataForm:any){
    console.log("strat...")
    this.patients$=this.patientService.searchPatients(dataForm.keyword)
    
      .pipe(
        map(data=>{console.log(data);
          return({dataState:DataStateEnum.LOADED,data:data})
        }),
         startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
  
      )

  }
}
