import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button'
import { MatInputModule } from "@angular/material/input";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import { MatDialogModule } from "@angular/material/dialog";
import {MatDividerModule  } from "@angular/material/divider";
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatListModule } from "@angular/material/list";
import {MatSnackBarModule  } from "@angular/material/snack-bar";
import {MatRadioModule} from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatStepperModule, MatDialogModule, MatDividerModule, MatCardModule,
    MatDatepickerModule, MatNativeDateModule,MatTabsModule,MatTableModule,MatSnackBarModule,MatListModule,MatRadioModule,MatPaginatorModule,MatGridListModule
  ]
  ,exports: [
    MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatToolbarModule, MatIconModule, MatStepperModule, MatDialogModule, MatDividerModule, MatCardModule,
    MatDatepickerModule, MatNativeDateModule,MatTabsModule,MatTableModule,MatSnackBarModule,MatListModule,MatRadioModule,MatPaginatorModule,MatGridListModule
  ],
  providers: []

})
export class MaterialModule { }
