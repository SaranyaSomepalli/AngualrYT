import { Component, OnInit } from '@angular/core';
import { VideodataService } from '../videodata.service';

@Component({
  selector: 'app-video-listing',
  templateUrl: './video-listing.component.html',
  styleUrls: ['./video-listing.component.css']
})
export class VideoListingComponent implements OnInit {
  dataListing:Array<Object>=[];
  constructor (private videodataservice: VideodataService){}

  ngOnInit(): void {
    this.videodataservice.getAllVideos().subscribe((data) =>{
        this.dataListing = data
    });
      
    
  }
}

