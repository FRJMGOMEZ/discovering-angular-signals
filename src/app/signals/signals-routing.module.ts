import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';

const routes:Routes = [
  {path:'',component:SignalsLayoutComponent , children:[
    {path:'counter',component:CounterPageComponent},
    {path:'user-info',component:UserInfoPageComponent},
    {path:'mutaciones',component:PropertyPageComponent},
    {path:'**', redirectTo:'counter'}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignalsRoutingModule { }
