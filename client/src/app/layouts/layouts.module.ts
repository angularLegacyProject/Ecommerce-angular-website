import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    UserLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
