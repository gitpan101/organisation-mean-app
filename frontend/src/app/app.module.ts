import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AppMaterialsModule } from "./app-materials/app-materials.module";
import { ListComponent } from "./departments/list.component";
import { DetailsComponent } from './departments/details.component';
import { EditComponent } from './departments/edit.component';

@NgModule({
  declarations: [AppComponent, ListComponent, DetailsComponent, EditComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
