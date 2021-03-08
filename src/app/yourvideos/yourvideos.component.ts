import { Component, OnInit } from '@angular/core';
import { VideodataService } from '../videodata.service';

@Component({
  selector: 'app-yourvideos',
  templateUrl: './yourvideos.component.html',
  styleUrls: ['./yourvideos.component.css']
})
export class YourvideosComponent implements OnInit {
  dataListing2:Array<Object>=[];
  constructor(private videodataservice: VideodataService) { }

  ngOnInit(): void {
    this.videodataservice.getAllVideos().subscribe((data) =>{
        this.dataListing2 = data
    });

}
}