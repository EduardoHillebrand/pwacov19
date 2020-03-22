import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatSelectModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { Question1 } from './question-1/question-1.component';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RecebeRespostasComponent } from './recebe-respostas/recebe-respostas.component';
import { Question2Component } from './question2/question2.component';
import { Question4Component } from './question4/question4.component';
import { Question7Component } from './question7/question7.component';
import { Question10Component } from './question10/question10.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    Question1,
    RecebeRespostasComponent,
    Question2Component,
    Question4Component,
    Question7Component,
    Question10Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
		FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSelectModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
