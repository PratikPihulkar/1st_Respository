import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataStoreService } from '../../../Services/data-store.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.css'
})
export class CreditComponent implements OnInit{

  transectionForm !:FormGroup;

id:any
  constructor( private fb:FormBuilder ,  private dataStoreService: DataStoreService ,private router:ActivatedRoute, private rout:Router) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get("id");
    console.log(new Date().getTime)
    // Initialize the form group immediately
    this.transectionForm = this.fb.group({
        id: [ new Date().getTime().toString() ],
        fullName: ['', [Validators.required, ]],//Validators.pattern('^[a-zA-Z]+(\\s[a-zA-Z]+)?$')
        mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        date: ['', [Validators.required]], // Initialize with an empty string; will be updated later
        currentBalence: [''], // Initialize with an empty string; will be updated later
        credit: ['', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]]
    });

    // Fetch additional data and update form controls if needed
    this.fetchArr();
}

  
  date = new Date();
  formattedDate = this.date.toLocaleString();


  ammountVar:any[]=[]
  availBalance:number=0

  transectionList()
  {
        this.rout.navigate(['list/'+this.id]);
  }

  goBack(){
    window.history.back()
  }





//////////////////////////////////////////////
temp:any
fetchArr() {
  this.dataStoreService.fetchArr(this.id).subscribe((res) => {
      this.temp = res;
      this.ammountVar = this.temp.transectionList;
      this.availBalance = this.ammountVar[this.ammountVar.length - 1].currentBalence;

      // Update form controls with fetched data
      this.transectionForm.patchValue({
          date: this.formattedDate,
          currentBalence: this.availBalance
      });
  });
}



performTransection(){
  // console.log("==========="+this.ammountVar.length)


  this.transectionForm.value.currentBalence=Number(this.availBalance)+Number(this.transectionForm.value.credit)
  
  this.ammountVar.push(this.transectionForm.value)
  
  // console.log("==========="+this.ammountVar.length)
  
  this.dataStoreService.addTransection(this.id, this.ammountVar).subscribe(()=>{
  //  console.log(".................."+this.availBalance)
   
alert("Transection Complete")
   window.location.reload()
 })
}







}
