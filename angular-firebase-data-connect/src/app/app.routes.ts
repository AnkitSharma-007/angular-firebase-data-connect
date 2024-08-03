import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'employee/new',
    component: EmployeeFormComponent,
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeFormComponent,
  },
  { path: '**', component: HomeComponent },
];
