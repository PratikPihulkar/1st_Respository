import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../Services/data-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-transection',
  templateUrl: './edit-transection.component.html',
  styleUrls: ['./edit-transection.component.css']
})
export class EditTransectionComponent implements OnInit {

  tempArr: any[] = [];
  userId: any;
  editIndex: number | null = null;

  constructor(private dataStoreService: DataStoreService, private router: ActivatedRoute, private rout: Router) {}

  ngOnInit(): void {
    this.userId = this.router.snapshot.paramMap.get("id");
    console.log("idddddddddddd" + this.userId);
    this.getUserList(this.userId);
  }

  getUserList(id: any) {
    this.dataStoreService.getUserTransectionById(this.userId).subscribe((res) => {
      this.tempArr = res.transectionList;
    });
  }

  goBack() {
    window.history.back();
  }

  editTransection(index: number) {
    this.editIndex = index;
  }

  saveTransection(index: number) {
    this.tempArr.push();
    this.dataStoreService.updateTransection(this.userId, this.tempArr).subscribe((res:any)=>{
      alert("Transection Updated")
    })
  }

  deletSingleTransection(index: number) {
    this.tempArr.splice(index, 1);
    // console.log(this.tempArr);
    this.dataStoreService.updateTransection(this.userId, this.tempArr).subscribe((res:any)=>{
      alert("Transection Deleted")
    })
  }
   
}
