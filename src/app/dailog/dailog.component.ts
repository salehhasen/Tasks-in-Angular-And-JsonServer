import { Component,Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators  } from "@angular/forms";
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ConnectionService } from "../service/connection.service";
@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {
TaskForm:FormGroup; 
action:string='اضافة'; 
actionbtn:string='اضافة'; 
constructor(private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editdata:any,
     private dialogref:MatDialogRef<DailogComponent>,
     private con: ConnectionService) { }

  ngOnInit(): void {
    this.TaskForm = this.fb.group({
   
      name: ['', Validators.required],    
      description: ['', Validators.required],
       datestart:['',Validators.required],
       dateend: ['', Validators.required],    
      enployeeToDo: ['', Validators.required]
    });
    if(this.editdata){
      this.action= `تعديل المهمة ${this.editdata.id}`;
      console.log(this.editdata.id);
      this.actionbtn='تعديل';
      this.TaskForm.controls['name'].setValue(this.editdata.name)
      this.TaskForm.controls['description'].setValue(this.editdata.description)
      this.TaskForm.controls['datestart'].setValue(this.editdata.datestart)
      this.TaskForm.controls['dateend'].setValue(this.editdata.dateend)
      this.TaskForm.controls['enployeeToDo'].setValue(this.editdata.enployeeToDo)
         }
  
  }
  onCommentChange() {
    console.log(this.TaskForm.get("description").value);
}
  onClick() {
  
    if(!this.editdata){
      if(this.TaskForm.valid){
        this.con.add_task(this.TaskForm.value).subscribe(data=>{
          console.log("added successoflly");
          this.TaskForm.reset();
          this.dialogref.close("save");
        },
        err=>{
          console.log("error")
        }
        )
      }
    }  
    if(this.editdata){
      this.update_task()
    }
}
update_task(){
  this.con.edit_task(this.TaskForm.value,this.editdata.id).subscribe(data=>{
    console.log("update successoflly");
    this.TaskForm.reset();
    this.dialogref.close("update");
  },
  err=>{
    console.log("error")
  }
  )
}

}
