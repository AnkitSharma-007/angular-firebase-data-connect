import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';
export const connectorConfig: ConnectorConfig;

export type TimestampString = string;

export type UUIDString = string;

export type Int64String = string;

export type DateString = string;


export interface City_Key {
  id: UUIDString;
  __typename?: 'City_Key';
}

export interface CreateEmployeeResponse {
  employee_insert: Employee_Key;
}

export interface CreateEmployeeVariables {
  name: string;
  city: string;
  department: string;
  gender: string;
}

export interface DeleteEmployeeResponse {
  employee_delete?: Employee_Key | null;
}

export interface DeleteEmployeeVariables {
  id: UUIDString;
}

export interface Employee_Key {
  id: UUIDString;
  __typename?: 'Employee_Key';
}

export interface ListCitiesResponse {
  cities: ({
    id: UUIDString;
    cityName: string;
  } & City_Key)[];
}

export interface ListEmployeeByIdResponse {
  employees: ({
    id: UUIDString;
    name: string;
    gender: string;
    department: string;
    city: string;
  } & Employee_Key)[];
}

export interface ListEmployeeByIdVariables {
  uid?: UUIDString | null;
}

export interface ListEmployeesResponse {
  employees: ({
    id: UUIDString;
    name: string;
    gender: string;
    department: string;
    city: string;
  } & Employee_Key)[];
}

export interface UpdateEmployeeResponse {
  employee_update?: Employee_Key | null;
}

export interface UpdateEmployeeVariables {
  id: UUIDString;
  name: string;
  city: string;
  department: string;
  gender: string;
}



/* Allow users to create refs without passing in DataConnect */
export function createEmployeeRef(vars: CreateEmployeeVariables): MutationRef<CreateEmployeeResponse, CreateEmployeeVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createEmployeeRef(dc: DataConnect, vars: CreateEmployeeVariables): MutationRef<CreateEmployeeResponse,CreateEmployeeVariables>;

export function createEmployee(vars: CreateEmployeeVariables): MutationPromise<CreateEmployeeResponse, CreateEmployeeVariables>;
export function createEmployee(dc: DataConnect, vars: CreateEmployeeVariables): MutationPromise<CreateEmployeeResponse,CreateEmployeeVariables>;


/* Allow users to create refs without passing in DataConnect */
export function updateEmployeeRef(vars: UpdateEmployeeVariables): MutationRef<UpdateEmployeeResponse, UpdateEmployeeVariables>;
/* Allow users to pass in custom DataConnect instances */
export function updateEmployeeRef(dc: DataConnect, vars: UpdateEmployeeVariables): MutationRef<UpdateEmployeeResponse,UpdateEmployeeVariables>;

export function updateEmployee(vars: UpdateEmployeeVariables): MutationPromise<UpdateEmployeeResponse, UpdateEmployeeVariables>;
export function updateEmployee(dc: DataConnect, vars: UpdateEmployeeVariables): MutationPromise<UpdateEmployeeResponse,UpdateEmployeeVariables>;


/* Allow users to create refs without passing in DataConnect */
export function deleteEmployeeRef(vars: DeleteEmployeeVariables): MutationRef<DeleteEmployeeResponse, DeleteEmployeeVariables>;
/* Allow users to pass in custom DataConnect instances */
export function deleteEmployeeRef(dc: DataConnect, vars: DeleteEmployeeVariables): MutationRef<DeleteEmployeeResponse,DeleteEmployeeVariables>;

export function deleteEmployee(vars: DeleteEmployeeVariables): MutationPromise<DeleteEmployeeResponse, DeleteEmployeeVariables>;
export function deleteEmployee(dc: DataConnect, vars: DeleteEmployeeVariables): MutationPromise<DeleteEmployeeResponse,DeleteEmployeeVariables>;


/* Allow users to create refs without passing in DataConnect */
export function listCitiesRef(): QueryRef<ListCitiesResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listCitiesRef(dc: DataConnect): QueryRef<ListCitiesResponse,undefined>;

export function listCities(): QueryPromise<ListCitiesResponse, undefined>;
export function listCities(dc: DataConnect): QueryPromise<ListCitiesResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listEmployeesRef(): QueryRef<ListEmployeesResponse, undefined>;/* Allow users to pass in custom DataConnect instances */
export function listEmployeesRef(dc: DataConnect): QueryRef<ListEmployeesResponse,undefined>;

export function listEmployees(): QueryPromise<ListEmployeesResponse, undefined>;
export function listEmployees(dc: DataConnect): QueryPromise<ListEmployeesResponse,undefined>;


/* Allow users to create refs without passing in DataConnect */
export function listEmployeeByIdRef(vars?: ListEmployeeByIdVariables): QueryRef<ListEmployeeByIdResponse, ListEmployeeByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function listEmployeeByIdRef(dc: DataConnect, vars?: ListEmployeeByIdVariables): QueryRef<ListEmployeeByIdResponse,ListEmployeeByIdVariables>;

export function listEmployeeById(vars?: ListEmployeeByIdVariables): QueryPromise<ListEmployeeByIdResponse, ListEmployeeByIdVariables>;
export function listEmployeeById(dc: DataConnect, vars?: ListEmployeeByIdVariables): QueryPromise<ListEmployeeByIdResponse,ListEmployeeByIdVariables>;


