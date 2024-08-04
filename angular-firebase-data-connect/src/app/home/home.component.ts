import { Component, inject, OnDestroy, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../../models/employee';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { SnackbarService } from '../services/snackbar.service';
import { EMPTY, ReplaySubject, switchMap, takeUntil } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnDestroy {
  private paginator!: MatPaginator;
  private sort!: MatSort;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  private readonly employeeService = inject(EmployeeService);
  private readonly snackbarService = inject(SnackbarService);
  private readonly dialog = inject(MatDialog);
  private destroyed$ = new ReplaySubject<void>(1);

  displayedColumns: string[] = [
    'name',
    'gender',
    'department',
    'city',
    'operation',
  ];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource();

  constructor() {
    this.getEmployeeData();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteConfirm(rowData: Employee) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      data: rowData,
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((result) => {
          if (result) {
            return this.getEmployeeData();
          } else {
            return EMPTY;
          }
        }),
        takeUntil(this.destroyed$)
      )
      .subscribe({
        next: () => {
          this.snackbarService.showSnackBar(
            'Employee data deleted successfully.'
          );
        },
        error: (error) => {
          this.snackbarService.showSnackBar('Unable to delete employee data.');
          console.error('Error ocurred while deleting employee data : ', error);
        },
      });
  }

  private getEmployeeData() {
    return this.employeeService.getAllEmployees().then((employees) => {
      this.dataSource.data = employees;
    }, console.error);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
