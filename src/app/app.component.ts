import { Component, ViewChild, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DailogComponent } from './dailog/dailog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ConnectionService } from "./service/connection.service";
import {  DialogService} from "./service/dialog.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tasks';
   constructor(
    public dialog: MatDialog,
    private service: ConnectionService ,
    private dialogservice: DialogService 
    ) { }

 displayedColumns: string[] = ['رقم المهمة','اسم المهمة','تاريخ بداية المهمه','تاريخ نهاية المهمه','الحدث'];
 listData: MatTableDataSource<any>;
 @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 
 ngOnInit() {  
this.get_tasks();
}
get_tasks(){
  this.service.get_tasks().subscribe(data=>{
    console.log(data);
      this.listData = new MatTableDataSource(data);
  this.listData.paginator = this.paginator;
  },err=>{
     console.log(err);
   })
}
  openDialog() {
   this.dialog.open(DailogComponent,
      {
        width:'30%'
      }).afterClosed().subscribe(val=>{
        if(val=="save"){
          this.get_tasks();
        }
      });
  }
  editTask(row){
    this.dialog.open(DailogComponent,
      {
        width:'30%',
        data:row
      }).afterClosed().subscribe(val=>{
        if(val=="update"){
          this.get_tasks();
        }
      });
  }
  deleteTask(id){
    this.dialogservice.openConfirmDialog()
    .afterClosed().subscribe(res=>{
     if(res){
      this.service.delete_task(id).subscribe(data=>{
        console.log("delete successoflly");
        this.get_tasks()
      },
      err=>{
        console.log("error")
      }
      )
     }
      
    })

  }
}
