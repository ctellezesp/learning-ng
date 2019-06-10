import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
	{path: 'admin', children: [
		{path: 'users', children: [
			{path: 'dashbord', component: DashbordComponent},
			{path: 'detail', component: DetailComponent},
			{ path: '**',   redirectTo: '', pathMatch: 'full' }
		]}
	]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }