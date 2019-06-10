import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
	{path: 'admin', children: [
		{path: 'welcome', component: WelcomeComponent},
		{path: 'logout', component: LogoutComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
