import { Component } from '@angular/core';
import { DataStoreService } from '../../Services/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public dataStoreService:DataStoreService,  private router:Router){
    this.dataStoreService.loginVar=false

  }


tryLogout(){
  alert("Logout Successfull!")
  this.router.navigate(['login']);
  this.dataStoreService.loginVar=false

}
  
}
