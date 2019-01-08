import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IDepartment } from "./models/department.model";
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
}
