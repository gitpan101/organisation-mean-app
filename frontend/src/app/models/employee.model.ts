import { IDepartment } from "./department.model";

export interface IEmployee {
  _id: String;
  name: String;
  email: String;
  contactNum: String;
  salary: String;
  department: IDepartment;
}
