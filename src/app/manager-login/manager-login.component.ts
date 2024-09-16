import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../Services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrl: './manager-login.component.css'
})
export class ManagerLoginComponent implements OnInit{

  constructor(private http:HttpClient , private dataStore:DataStoreService, private router:ActivatedRoute, private rout:Router) {
    
  }
tempArr:any[]=[]
  ngOnInit(): void {
   this.getList()
  }

  getList(){
    this.dataStore.getAccountHoler().subscribe((res)=>{
      this.tempArr=res
    })
  }
  seeTransection(id:any)
  {
    this.rout.navigate(['editTransection/'+id]);
  }
  deletUser(id:any){
    console.log(id)
    this.dataStore.deleteSingleUser(id).subscribe((res)=>{})
    // this.dataStore.deleteUserTransection(id).subscribe((res)=>{})
    // this.getList()
    window.location.reload()
    
  }
  
}
