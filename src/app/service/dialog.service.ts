import { Injectable } from '@angular/core';
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog:MatDialog) { }
  openConfirmDialog(){
   return this.dialog.open(ConfirmDialogComponent,{
      width:"390px",
      panelClass:"confirm-dialog-container",
      disableClose:true
    })
  }
}
