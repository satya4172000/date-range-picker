import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    component:CommonLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
      { path: 'date-range', loadChildren: () => import('./date-range-selector/date-range-selector.module').then(m => m.DateRangeSelectorModule)},
      
    ],
      
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
        preloadingStrategy: PreloadAllModules,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled' 
    })
],
exports: [
    RouterModule
]
})
export class AppRoutingModule { }
