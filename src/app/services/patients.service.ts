import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }

  getAllPatients():Observable<Patient[]>{
    let host= environment.host
    return this.http.get<Patient[]>(host + "/patients")
  }
  getPatientvacciner():Observable<Patient[]>{
    let host= environment.host
    return this.http.get<Patient[]>(host + "/patients?Patientvacciner")
  }
  getPatientSuivi():Observable<Patient[]>{
    let host= environment.host
    return this.http.get<Patient[]>(host + "/patients?PatientSuivi")
  }

  searchPatients(keyword:string):Observable<Patient[]>{
    let host= environment.host
    return this.http.get<Patient[]>(host + "/patients?name_like="+keyword)
  }




}
