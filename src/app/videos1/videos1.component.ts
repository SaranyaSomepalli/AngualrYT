import { Component, Input, OnInit } from '@angular/core';
import {videoData} from '../model';
import { Router } from '@angular/router';
import {VideodataService} from '../videodata.service';

@Component({
  selector: 'app-videos1',
  templateUrl: './videos1.component.html',
  styleUrls: ['./videos1.component.css']
})
export class Videos1Component implements OnInit {
 
users:any;
  @Input('videoData') videoData:Partial<videoData> = {}
  constructor(private vds:VideodataService,private router:Router) { }

  ngOnInit(): void {
  }

  public deleteVideo1(videotitle :any){
    let response = this.vds.deleteVideo(videotitle);
    response.subscribe(data=>this.users=data);
    this.router.navigate( ['/yourvideos'])
  }

}
