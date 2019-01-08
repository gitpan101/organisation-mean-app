import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import {
  MatFormFieldModule,
  MatOptionModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatFormFieldModule,
    MatOptionModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatToolbarModule
  ]
})
export class AppMaterialsModule {}
