import { Component, inject, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../models/employee';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.scss',
})
export class DeleteEmployeeComponent {
  private readonly employeeService = inject(EmployeeService);
  // private readonly employeeId: string = Inject(MAT_DIALOG_DATA);

  employeeData: Employee = {} as Employee;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly employeeId: string) {
    console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId).then((data) => {
      this.employeeData = data;
    }, console.error);
  }

  confirmDelete(): void {
    this.employeeService.deleteEmployee(this.employeeId);
  }
}
