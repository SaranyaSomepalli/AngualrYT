import { Component, Input, OnInit } from '@angular/core';
import {videoData} from '../model';
import {VideodataService} from '../videodata.service';

@Component({
  selector: 'app-searchid',
  templateUrl: './searchid.component.html',
  styleUrls: ['./searchid.component.css']
})
export class SearchidComponent implements OnInit {
  @Input('recipe_data') recipe_data:any={}
  constructor(private vds:VideodataService) { }

  ngOnInit(): void {
  }

}
