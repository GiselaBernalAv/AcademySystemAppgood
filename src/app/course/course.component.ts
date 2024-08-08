import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/Course';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, Validators, FormBuilder,
        FormControl, NgForm, NgModel} from '@angular/forms';
import { AppModule } from '../app.module';


@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule, AppModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{

 // formCourseGroup: FormGroup;
  constructor() {
    // var _builder = new FormBuilder();
    // this.formCourseGroup = _builder.group({});
    // this.formCourseGroup.
    // addControl("CourseNameControl",
    //             new FormControl('',Validators.required)
    // );
    // var validationcollection = [];
    //    validationcollection.push(Validators.required);
    //    validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))

    //    this.formCourseGroup.
    //    addControl("CourseCodeControl",
    //                new FormControl('',Validators.compose(validationcollection))
    //    );
  }
  CourseModel : Course = new Course();
  CoursesModel :Array<Course> = new Array<Course>();

  Add(){
    this.CoursesModel.push(this.CourseModel);
    this.CourseModel = new Course();// clear UI
  }
  ngOnInit(): void {

  }
}
