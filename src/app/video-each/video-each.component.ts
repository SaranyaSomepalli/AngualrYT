import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideodataService} from '../videodata.service';

@Component({
  selector: 'app-video-each',
  templateUrl: './video-each.component.html',
  styleUrls: ['./video-each.component.css']
})
export class VideoEachComponent implements OnInit {
  videoObject:any ={};

  constructor(private activatedRoute:ActivatedRoute,private dataservice:VideodataService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id)
    this.videoObject = this.dataservice.getVideoById(this.activatedRoute.snapshot.params.id)
  }
  

}
