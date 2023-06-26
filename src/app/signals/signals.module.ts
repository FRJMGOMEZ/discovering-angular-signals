import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { RouterModule } from '@angular/router';
import { SignalsRoutingModule } from './signals-routing.module';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertyPageComponent } from './pages/property-page/property-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SignalsLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertyPageComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    RouterModule
  ]
})
export class SignalsModule { }
