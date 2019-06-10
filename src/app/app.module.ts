import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Packages for Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { RouterModule, Routes } from '@angular/router'; //Router

import { FlexLayoutModule } from '@angular/flex-layout'; //flex

import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { TableSelectionComponent } from './table-selection/table-selection.component';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { MaterialComponent } from './material/material.component';
import { FlexComponent } from './flex/flex.component';
import {YouNeedPermissions} from './youNeedPermissions/youNeedPermissions.component';
import { PostComponent } from './post/post.component';
import {CarsComponent} from './cars/cars.component';

import { AdminModule } from './admin/admin.module';
import { UsersModule } from './admin/users/users.module';
import { RolesModule } from './admin/roles/roles.module';

import {PersonsService} from './persons.service';
import {PostService} from './post.service';
import {CarsService} from './cars.service';



@NgModule({
  declarations: [
    AppComponent,
    TableSelectionComponent,
    AdminWelcomeComponent,
    MaterialComponent,
    FlexComponent,
    YouNeedPermissions,
    PostComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    AdminModule,
    UsersModule,
    RolesModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PersonsService, PostService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
