import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule }          from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Packages for Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { RouterModule, Routes } from '@angular/router'; //Router

import { FlexLayoutModule } from '@angular/flex-layout'; //flex

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';


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
import {ProfileComponent} from './profile/profile.component';
import { FormsComponent } from './forms/forms.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { RxJSComponent } from './rxjs/rxjs.component';
import { DynamicFormComponent } from './dynamicForm/dynamicForm.component';

import { AdminModule } from './admin/admin.module';
import { UsersModule } from './admin/users/users.module';
import { RolesModule } from './admin/roles/roles.module';

import {PersonsService} from './persons.service';
import {PostService} from './post.service';
import {CarsService} from './cars.service';
import {AuthService} from './auth.service';
import { AuthGuard } from './auth.guard';
import { PostResolver } from './post-resolve.service';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { UserService } from './user.service';
import { UserQueryService } from './user-query.service';

@NgModule({
  declarations: [
    AppComponent,
    TableSelectionComponent,
    AdminWelcomeComponent,
    MaterialComponent,
    FlexComponent,
    YouNeedPermissions,
    PostComponent,
    CarsComponent,
    ProfileComponent,
    FormsComponent,
    SyntaxComponent,
    RxJSComponent,
    DynamicFormComponent,
    DynamicFieldComponent
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
    RolesModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PersonsService, PostService, CarsService, AuthService, AuthGuard, PostResolver, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}