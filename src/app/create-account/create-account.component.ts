import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DataStoreService } from '../../Services/data-store.service';
import { CreditComponent } from '../add-transection/credit/credit.component';
import {  Router } from '@angular/router';

interface Data {
  fullName: any;
  mobile: any;
  date: any;
  currentBalence: any;
  credit: any;
}
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit{
  personalDetails!: FormGroup;
  

  constructor(  private fb: FormBuilder, private dataStoreService: DataStoreService, private rout:Router) {}

  ngOnInit(): void {
    this.personalDetails = this.fb.group({
      fullName: ['', Validators.required ] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      address: ['', [Validators.required, Validators.maxLength(200)]],
      image:['', Validators.required ],
      accountType: ['', [Validators.required]],
      openingBalence:['', Validators.required ],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      // password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required]
    },{
      validators: this.passwordMatchValidator
    });
  }
  positiveNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      
      if (value <= 0) {
        return { nonPositive: true };
      }
  
      return null;
    };
  }
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword &&  password.value !== confirmPassword.value) {
      console.log("Password MAtched")
      return { passwordMismatch: true };
      
    }
    return null;
  }


  flag=false
tempBalence:any





  goBack() {
    window.history.back();
  }

data!:Data

date = new Date();
formattedDate = this.date.toLocaleString();



  saveData(): void {
    if (this.personalDetails.invalid) {
      alert("Please correct the errors in the form.");
      return;}

    console.log(this.personalDetails.value);
    this.dataStoreService.createUser(this.personalDetails.value).subscribe((res)=>{

     
      this.tempBalence=res.openingBalence
      console.log("RESS %#%#%#%"+res.id, res.openingBalence);
      
      this.data={
        fullName:"Opening Balence",
        mobile: "",
        date:this.formattedDate ,
        currentBalence: this.tempBalence,
        credit:this.tempBalence 
       }

      this.dataStoreService.createFirstTransection({id:res.id,transectionList:[this.data]}).subscribe((res)=>{ console.log("Object Created")})
      alert("User Account Created")
      this.rout.navigate(['/login']);
    })
    
  }


  
}