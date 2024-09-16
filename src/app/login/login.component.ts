import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { DataStoreService } from '../../Services/data-store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  id:any

  constructor(  private fb: FormBuilder, private dataStoreService: DataStoreService, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailId: ['', Validators.required ,] ,//^[a-zA-Z]+(\s[a-zA-Z]+)?$    Validators.pattern('^[a-zA-Z]+$')
      password: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  emailValue:any
  passwordValue:any

  goBack() {
    window.history.back();
  }


tempArr:any

tryLogin(){
  this.dataStoreService.login(this.loginForm.value.emailId).subscribe((res)=>{
    this.tempArr = res
    
    if (this.tempArr.password===this.loginForm.value.password) {
      console.log("Password Matched")
      alert("Welcome "+this.tempArr.fullName)
    
      this.dataStoreService.globleId=this.tempArr.id
      this.dataStoreService.loginVar=true

      this.router.navigate(['addTransection/'+this.tempArr.id]);
    }
    else{
      alert("Enter Valid Password!!")
      window.location.reload()
    } 
  },
  (error) => {
    if (error.status === 404) {
      alert("User not found with this Email ID. Please try again.");
      window.location.reload()
    } else {
      alert("An error occurred. Please try again later.");
      window.location.reload()
    }
  }

)

}


}
