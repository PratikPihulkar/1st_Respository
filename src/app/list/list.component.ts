import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../Services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  constructor(private dataStoreService: DataStoreService ,private router:ActivatedRoute , private rout: Router){}


tempArr:any[]=[]

id:any

    ngOnInit(): void {
    
      this.id=this.router.snapshot.paramMap.get("id")
      console.log("idddddddddddd"+this.id)
      this.getUserList(this.id)

    }

    obj:any
    getUserList(id:any){
      this.dataStoreService.getUserTransectionById(this.id).subscribe((res)=>{
      this.obj=res
      this.tempArr = this.obj.transectionList
        
      })
    }
    goBack(){
      window.history.back()
    }
  

  
}
