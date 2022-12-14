import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserMaterialModule } from './user-material.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [UsersComponent, CreateUserComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    UserMaterialModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class UsersModule {}
