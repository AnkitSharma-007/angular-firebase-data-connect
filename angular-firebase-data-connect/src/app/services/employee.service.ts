import { Injectable } from '@angular/core';
import {
  executeMutation,
  executeQuery,
  subscribe,
} from 'firebase/data-connect';

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
    const { data } = await executeQuery(listEmployeesRef()); // Use this line if you do not want subscribe.
    return data.employees;
    // subscribe will immediately invoke the query if no execute was called on it previously.
    // return subscribe(listEmployeesRef(), ({ data }) => {
    //   console.log(data.employees);
    //   return data.employees;
    // });
  }

  async getEmployeeById(employeeId: string) {
    const { data } = await executeQuery(
      listEmployeeByIdRef({ uid: employeeId })
    );

    console.log(data.employees[0]);
    return data.employees[0];
  }

  async getCityList() {
    const { data } = await executeQuery(listCitiesRef());
    return data.cities;
  }

  async deleteEmployee(employeeId: string) {
    await executeMutation(deleteEmployeeRef({ id: employeeId }));
  }
}
