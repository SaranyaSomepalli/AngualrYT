import { Component, OnInit } from '@angular/core';
import { VideodataService } from '../videodata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
 
  constructor(private recipe: VideodataService) { }

 
  ngOnInit(): void {
  }
  recipes(value:string)
  {
    this.recipe.search_string=value
    console.log(this.recipe.search_string)
  }
  

}
