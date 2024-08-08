import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  @Output() 
  selectedFeature = new EventEmitter<string>();

  onSelectFeature(featuresel:string)
  {
     console.log(featuresel);
       this.selectedFeature.emit(featuresel);
  }
  ngOnInit(): void {

  }
}
