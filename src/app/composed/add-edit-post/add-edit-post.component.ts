import { Post } from './model/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { Mode } from './model/mode.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

enum textButtonValue {
  ADD = "ADD",
  EDIT = "EDIT"
}
@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})



export class AddEditPostComponent implements OnInit {
  form : FormGroup;
  @Input() model : Post;
  @Input() mode : Mode; 
  buttonText : textButtonValue = textButtonValue.ADD; 
  
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    if(this.mode == Mode.EDIT_MODE) {
      this.buttonText = textButtonValue.EDIT;
      this.form = this.fb.group({
        title: [this.model.title,Validators.required],
        content: [this.model.content,Validators.required]
      });
    }
    else {
      this.form = this.fb.group({
        title: ["",Validators.required],
        content: ["",Validators.required]
      });
    }
  }

  submitClick() {
    if(this.mode == Mode.EDIT_MODE)
        this.editAction();
    else 
      this.addAction();
  }

  addAction() {
    console.log("add action");
  }

  editAction() {
    console.log("edit action");
  }

}
