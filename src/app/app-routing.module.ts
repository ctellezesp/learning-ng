import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { MaterialComponent } from './material/material.component';
import {FlexComponent} from './flex/flex.component';
import {YouNeedPermissions} from './youNeedPermissions/youNeedPermissions.component';
import { PostComponent } from './post/post.component';
import {CarsComponent} from './cars/cars.component';
import {ProfileComponent} from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { RxJSComponent } from './rxjs/rxjs.component';

import { AuthGuard } from './auth.guard';
import { PostResolver } from './post-resolve.service';

const appRoutes: Routes = [
  { path: '', component: AdminWelcomeComponent },
  { path: 'material', component: MaterialComponent},
  { path: 'flex', component: FlexComponent},
  { path: 'youNeedPermissions', component: YouNeedPermissions,  canActivate: [AuthGuard]},
  { path: 'post', component: PostComponent, resolve: {records: PostResolver}},
  { path: 'cars', component: CarsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'forms', component: FormsComponent},
  { path: 'syntax', component: SyntaxComponent},
  { path: 'rxjs', component: RxJSComponent},
  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}