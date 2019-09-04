import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailComponent } from './detail/detail.component';

import {UserQueryService} from '../../user-query.service';

@NgModule({
  declarations: [DashbordComponent, DetailComponent],
  imports: [
    CommonModule,
    RolesRoutingModule
  ], 
  providers: [UserQueryService]
})
export class RolesModule { }