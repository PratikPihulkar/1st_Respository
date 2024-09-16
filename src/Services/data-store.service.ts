import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(private http:HttpClient) { }

 
  loginVar=false
  globleId:any
 


 
  temper:any[]=[]
  
  getUserTransectionById(id:any):Observable<any>{   
    return this.http.get('http://localhost:3000/trans/'+id)
  }

  createUser(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/user', data )
  }
  getAccountHoler():Observable<any>{
    return this.http.get('http://localhost:3000/user')
  }

  fetchArr(id:any ){
    return this.http.get('http://localhost:3000/trans/'+id)
  }

  addTransection(id:any, data:any[]=[], ){
    return this.http.put('http://localhost:3000/trans/cc89',  {"id":id , "transectionList":data})
  }

  FetchLastTransection(id:any):Observable<any>{
    return this.http.get('http://localhost:3000/'+id)
  }

  createFirstTransection(data:any){
    return this.http.post('http://localhost:3000/trans/', data )
  }


  deleteSingleUser(id:any):Observable<any> {
    return this.http.delete('http://localhost:3000/user/'+id);
  }

  deleteUserTransection(id:any):Observable<any> {
    return this.http.delete('http://localhost:3000/trans/'+id);
  }

//tRANSECTION
  updateTransection(id: any, transection: any[]):Observable<any> { 
    console.log(transection)
    return this.http.put(`http://localhost:3000/trans/${id}`,  {"transectionList":transection});
    
  }

  




  id="cc84"

  login(id:any ):Observable<any> {
     return  this.http.get('http://localhost:3000/user/'+id)
  }


  ngOnInit(): void { }

  flag=true
  value:any




  goBack() {
    window.history.back();
  }




}

