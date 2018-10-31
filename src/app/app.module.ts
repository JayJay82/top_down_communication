import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ComposedComponent } from './composed/composed.component';
import { AddEditPostComponent } from './composed/add-edit-post/add-edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ComposedComponent,
    AddEditPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
