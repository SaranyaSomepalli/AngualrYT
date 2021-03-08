import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray, FormBuilder} from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { VideodataService } from "../videodata.service"

@Component({
  selector: 'app-createvideo',
  templateUrl: './createvideo.component.html',
  styleUrls: ['./createvideo.component.css']
})
export class CreatevideoComponent implements OnInit {
  productFormGroup:any;
  constructor(private activatedRoute: ActivatedRoute,private fb:FormBuilder, private videodataService: VideodataService ,private router:Router) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      videoTitle:this.fb.control(''),
      channelName:this.fb.control(''),
      views:this.fb.control(''),
      duration:this.fb.control(''),
      time:this.fb.control(''),
    })
  }
 
  submitForm(){
    console.log(this.productFormGroup.value);
    this.videodataService.addVideo(this.productFormGroup.value).subscribe((data) =>{
      this.productFormGroup.reset()
    this.router.navigate( ['yourvideos'])
    });
    
  }
}
