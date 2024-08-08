import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/Student';import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{
  constructor(){}
  StudentModel : Student = new Student();
  StudentsModel :Array<Student> = new Array<Student>();
  Add(){
    this.StudentsModel.push(this.StudentModel);
    this.StudentModel = new Student();// clear UI
  }
  ngOnInit(): void {

  }
}
