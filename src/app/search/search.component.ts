import { Component, Injectable, OnInit } from '@angular/core';
import { VideodataService } from '../videodata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable()
export class SearchComponent implements OnInit {
  data:any={}
  constructor(private recipe:VideodataService) { }

  ngOnInit(): void {
    this.recipe.searchvideo().subscribe((temp:any)=>{
      this.data=temp.hits
      console.log(this.recipe.search_string)
      console.log(this.data)
  })

}
}
