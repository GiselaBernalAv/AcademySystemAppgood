import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule , ReactiveFormsModule, NgForm} from "@angular/forms"
//import {RouterModule} from "@angular/router"
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
     
    
  ],
  imports: [
   // RouterModule.forChild(CustomerRoutes),
    CommonModule,
    CourseComponent,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
 // bootstrap: [CourseComponent]
})
export class AppModule { }
