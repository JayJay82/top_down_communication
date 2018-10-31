import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Mode } from './add-edit-post/model/mode.model';
import { Post } from './add-edit-post/model/post.model';

@Component({
  selector: 'app-composed',
  templateUrl: './composed.component.html',
  styleUrls: ['./composed.component.css']
})
export class ComposedComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) { }
  private sub: Subscription;
  mode : Mode;
  postModel : Post = new Post(null,null);
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(!params.id) 
          this.mode = Mode.ADD_MODE;
      else {
         this.postModel = new Post("Angular 7","The Complete Guide");
         this.mode = Mode.EDIT_MODE;
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
