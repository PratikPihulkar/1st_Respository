import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddTransectionComponent } from './add-transection/add-transection.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { DebitComponent } from './add-transection/debit/debit.component';
import { EditTransectionComponent } from './edit-transection/edit-transection.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileImageComponent
  },
  {
    path:'list/:id',//Transection
    component:ListComponent
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'createAccount',
    component:CreateAccountComponent
  },
  {
    path:'editTransection/:id',
    component:EditTransectionComponent
  },
  {
    path:'addTransection/:id',
    component:AddTransectionComponent
  },
  {
    path:'managerLogin',
    component:ManagerLoginComponent
  },
  {
    path:'debit',
    component:DebitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
