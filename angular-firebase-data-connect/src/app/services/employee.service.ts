import { Injectable } from '@angular/core';
import { executeMutation, executeQuery } from 'firebase/data-connect';
import { Employee } from '../../models/employee';
import {
  createEmployeeRef,
  deleteEmployeeRef,
  listCitiesRef,
  listEmployeeByIdRef,
  listEmployeesRef,
  updateEmployeeRef,
} from '../../../employee-generated';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  async saveEmployee(employee: Employee) {
    await executeMutation(createEmployeeRef(employee));
  }

  async updateEmployee(employeeId: string, employee: Employee) {
    executeMutation(updateEmployeeRef({ ...employee, id: employeeId }));
  }

  async getAllEmployees() {
    const { data } = await executeQuery(listEmployeesRef());
    return data.employees;
  }

  async getEmployeeById(employeeId: string) {
    const { data } = await executeQuery(
      listEmployeeByIdRef({ uid: employeeId })
    );

    return data.employees[0];
  }

  async getCityList() {
    const { data } = await executeQuery(listCitiesRef());
    return data.cities;
  }

  async deleteEmployee(employeeId: string | undefined) {
    if (employeeId) {
      await executeMutation(deleteEmployeeRef({ id: employeeId }));
    }
  }
}
