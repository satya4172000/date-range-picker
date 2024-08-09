import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ThemeConstantService } from './services/theme-constant.service';



@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
   
],
imports: [
    RouterModule,
    CommonModule,
],
declarations: [
],
providers: [
    ThemeConstantService
],
schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
