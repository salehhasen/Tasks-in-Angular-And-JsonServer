import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './../model/task';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  pipe = new DatePipe('en-US');
  baseurl="http://localhost:3003";
  constructor(private http:HttpClient) { }  
  TransferDate(birthdate:Date){
    return this.pipe.transform(birthdate, 'yyyy-MM-dd');
  }
  get_tasks(){
    return this.http.get<any>(`${ this.baseurl}/Tasks`);
  } 
  add_task(data:any){
    return this.http.post<any>(`${ this.baseurl}/Tasks`,data);
  }
  edit_task(data:any,id:number){
    alert(id)
    return this.http.put<any>(`${ this.baseurl}/Tasks/${id}`,data);
  }
  delete_task(id:number){
    return this.http.delete<any>(`${ this.baseurl}/Tasks/${id}`);
  }
}
