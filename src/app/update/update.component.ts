import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormArray, FormBuilder, Validators} from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';
import { VideodataService } from "../videodata.service"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  productFormGroup:any;
  constructor(private activatedRoute: ActivatedRoute, private fb:FormBuilder, private videodataService: VideodataService ,private router:Router) { }

  ngOnInit(): void {
    let currentId = this.activatedRoute.snapshot.params.id;
    this.videodataService.getProductById(currentId).subscribe((currentProduct:any)=>{
    this.productFormGroup = this.fb.group({
      videoTitle:this.fb.control(''),
      channelName:this.fb.control(''),
      views:this.fb.control(''),
      duration:this.fb.control(''),
      time:this.fb.control(''),
    })
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
