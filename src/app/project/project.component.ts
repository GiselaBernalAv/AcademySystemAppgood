import { Component, OnInit } from '@angular/core';
import { Project } from '../Models/Project';import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  constructor(){}
  ProjectModel : Project = new Project();
  ProjectsModel :Array<Project> = new Array<Project>();
  Add(){
    this.ProjectsModel.push(this.ProjectModel);
    this.ProjectModel = new Project();// clear UI
  }
  ngOnInit(): void {

  }
}
