import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {videoData} from '../model';
import {VideodataService} from '../videodata.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  @Input('videoData') videoData:Partial<videoData> = {}
  constructor(private vds:VideodataService) { }

  ngOnInit(): void {
  }

}
