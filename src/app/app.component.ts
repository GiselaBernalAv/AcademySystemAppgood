import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StudentComponent,
            ProjectComponent, AboutComponent, HeaderComponent, CommonModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Academy System';

  loadedFeature='home';

  onNavigateHeader(feature:string){
    console.log(feature);
    this.loadedFeature= feature;
  }
}
