import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThemeConstantService } from './shared/services/theme-constant.service';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent,
],
imports: [
    RouterModule,
    BrowserModule,
    //BrowserAnimationsModule,
    AppRoutingModule,
    NgxDaterangepickerMd.forRoot(),

    //NgbModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    //HttpClientModule
    SharedModule
    //MaterialModule
    
],
providers: [
    {
        provide: LocationStrategy, 
        useClass: HashLocationStrategy
    },
    ThemeConstantService,
    provideAnimationsAsync()
],
bootstrap: [AppComponent]
})
export class AppModule { }
