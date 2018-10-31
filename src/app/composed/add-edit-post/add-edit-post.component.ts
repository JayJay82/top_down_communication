import { Post } from './model/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { Mode } from './model/mode.model';

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
 
  @Input() model : Post;
  @Input() mode : Mode; 
  buttonText : textButtonValue = textButtonValue.ADD; 
  
  constructor() { }

  ngOnInit() {
    if(this.mode == Mode.EDIT_MODE) {
      this.buttonText = textButtonValue.EDIT;
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
