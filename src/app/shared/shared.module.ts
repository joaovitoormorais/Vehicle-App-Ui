import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminV1Component } from './templates/admin-v1/admin-v1.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  declarations: [
    AdminV1Component,
    SideNavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
