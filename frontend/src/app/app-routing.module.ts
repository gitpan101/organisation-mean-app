import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateComponent } from "./departments/create.component";
import { ListComponent } from "./departments/list.component";
import { DetailsComponent } from "./departments/details.component";
import { EditComponent } from "./departments/edit.component";

const routes: Routes = [
  { path: "department/create", component: CreateComponent },
  { path: "department/list", component: ListComponent },
  { path: "department/details/:id", component: DetailsComponent },
  { path: "department/edit/:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
