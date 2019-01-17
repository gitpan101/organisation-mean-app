import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IDepartment } from "./models/department.model";
import { IEmployee } from "./models/employee.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  _uri: String = "/api";

  constructor(private _http: HttpClient) {}

  createDepartment(department: IDepartment): Observable<IDepartment> {
    return this._http.post<IDepartment>(`${this._uri}/departments`, department);
  }

  getDepartments(): Observable<IDepartment[]> {
    return this._http.get<IDepartment[]>(`${this._uri}/departments`);
  }

  getDepartmentById(id: String): Observable<IDepartment> {
    return this._http.get<IDepartment>(`${this._uri}/departments/${id}`);
  }

  getEmployeesByDept(id: String): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(`${this._uri}/employeesByDept/${id}`);
  }

  updateDepartmentInfo(
    id: String,
    update: IDepartment
  ): Observable<IDepartment> {
    return this._http.patch<IDepartment>(
      `${this._uri}/departments/${id}`,
      update
    );
  }

  deleteDepartment(id: String): Observable<IDepartment> {
    return this._http.delete<IDepartment>(`${this._uri}/departments/${id}`);
  }

  createEmployee(employee: IEmployee): Observable<IEmployee> {
    return this._http.post<IEmployee>(`${this._uri}/employees`, employee);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(`${this._uri}/employees`);
  }

  deleteEmployee(id: String): Observable<IEmployee> {
    return this._http.delete<IEmployee>(`${this._uri}/employees/${id}`);
  }
}
