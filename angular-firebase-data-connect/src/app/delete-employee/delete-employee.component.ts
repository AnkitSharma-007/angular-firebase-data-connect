import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../models/employee';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, JsonPipe],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.scss',
})
export class DeleteEmployeeComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public employeeData: Employee,
    private readonly employeeService: EmployeeService
  ) {}

  confirmDelete(): void {
    this.employeeService.deleteEmployee(this.employeeData.id);
  }
}
