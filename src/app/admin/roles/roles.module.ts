import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DashbordComponent, DetailComponent],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }