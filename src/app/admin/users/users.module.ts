import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [DashbordComponent, DetailComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
