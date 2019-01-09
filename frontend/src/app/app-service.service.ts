import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IDepartment } from "./models/department.model";
import { IEmployee } from "./models/employee.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  _uri: String = "http://localhost:3000/api";

  constructor(private _http: HttpClient) {}

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
}
