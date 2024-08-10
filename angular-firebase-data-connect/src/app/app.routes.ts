import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'employee/new',
    component: EmployeeFormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeFormComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: HomeComponent },
];
