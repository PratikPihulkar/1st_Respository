import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../Services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-transection',
  templateUrl: './add-transection.component.html',
  styleUrl: './add-transection.component.css'
})
export class AddTransectionComponent implements OnInit{

  id:any
  constructor( private dataStoreService: DataStoreService ,private router:ActivatedRoute, private rout:Router) {}

  ngOnInit(): void {
    this.id=this.router.snapshot.paramMap.get("id")
  }
  reload(){
    location.reload();
  }
}
