import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideodataService {
  search_string:String=""
 // data=[
 //   {
 //   id:1,
 //   videoTitle: "Video Title1",
 //   channelName : "Channel Name1",
 //   thumbnailImage:"http://unsplash.it/250/150?gravity=center",
 //   channelIcon:"http://unsplash.it/36/36?gravity=center",
 //   views: "12k views",
  //  duration:"12:20",
 //   time:"1 week ago"
    
 // },
 // {
 //   id:2,
 //   videoTitle: "Video Title2",
 //   channelName : "Channel Name2",
 //   thumbnailImage:"http://unsplash.it/250/150?gravity=center",
 //   channelIcon:"http://unsplash.it/36/36?gravity=center",
  //  views: "12k views",
 //   duration:"12:20",
  //  time:"1 week ago"
    
 // },
 // {
  //  id:3,
  //  videoTitle: "Video Title3",
   // channelName : "Channel Name3",
  //  thumbnailImage:"http://unsplash.it/250/150?gravity=center",
 //   channelIcon:"http://unsplash.it/36/36?gravity=center",
 //   views: "12k views",
 //   duration:"12:20",
//    time:"1 week ago"
    
  //},
 // {
   // id:4,
   // videoTitle: "Video Title4",
   // channelName : "Channel Name4",
  //  thumbnailImage:"http://unsplash.it/250/150?gravity=center",
  //  channelIcon:"http://unsplash.it/36/36?gravity=center",
  //  views: "12k views",
   // duration:"12:20",
  //  time:"1 week ago"
    
  //},
 // {
  //  id:5,
   // videoTitle: "Video Title5",
  //  channelName : "Channel Name5",
  //  thumbnailImage:"http://unsplash.it/250/150?gravity=center",
  //  channelIcon:"http://unsplash.it/36/36?gravity=center",
  //  views: "12k views",
  //  duration:"12:20",
   // time:"1 week ago"
    
  //},
 // {
 //   id:6,
  //  videoTitle: "Video Title6",
//    channelName : "Channel Name6",
 //   thumbnailImage:"http://unsplash.it/250/150?gravity=center",
  //  channelIcon:"http://unsplash.it/36/36?gravity=center",
  //  views: "12k views",
 //   duration:"12:20",
 //   time:"1 week ago"
    
 // },
  //{
  //  id:7,
  //  videoTitle: "Video Title7",
   // channelName : "Channel Name7",
  //  thumbnailImage:"http://unsplash.it/250/150?gravity=center",
  //  channelIcon:"http://unsplash.it/36/36?gravity=center",
  //  views: "12k views",
 //   duration:"12:20",
  //  time:"1 week ago"
    
  //},
  //{
  //  id:8,
  //  videoTitle: "Video Title8",
  //  channelName : "Channel Name8",
  //  thumbnailImage:"http://unsplash.it/250/150?gravity=center",
    //channelIcon:"http://unsplash.it/36/36?gravity=center",
   // views: "12k views",
   // duration:"12:20",
    //time:"1 week ago"
    
 // },
 // {
  //  id:9,
   // videoTitle: "Video Title9",
   // channelName : "Channel Name9",
    //thumbnailImage:"http://unsplash.it/250/150?gravity=center",
   // channelIcon:"http://unsplash.it/36/36?gravity=center",
   // views: "12k views",
   // duration:"12:20",
    //time:"1 week ago"
    
 // },
//  {
 //   id:10,
 //   videoTitle: "Video Title10",
 //   channelName : "Channel Name6",
 //   thumbnailImage:"http://unsplash.it/250/150?gravity=center",
   // channelIcon:"http://unsplash.it/36/36?gravity=center",
  //  views: "12k views",
 //   duration:"12:20",
 //   time:"1 week ago"  
 // }
  
//]
  constructor(private http:HttpClient) { }

  getAllVideos(): Observable<Array<Object>>{
   // return this.data;
  return this.http.get<Array<Object>>('http://localhost:9990/all-videos')
}
  getVideoById(id:number):any{
  //    return this.data.find(p => p.id == id);
  }

  addVideo(video:any){
   // dataObj.id = this.data.length+1;
    video.thumbnailImage ="http://unsplash.it/250/150?gravity=center"
    video.channelIcon = "http://unsplash.it/36/36?gravity=center"
    //this.data.push(dataObj)
    return this.http.post("http://localhost:9990/save-video",video, {responseType:"text" as "json"});

  }

  searchvideo():Observable<Array<object>>{
    return this.http.get<Array<Object>>(`http://localhost:9990/search/${this.search_string}`);
  }

  editvideo(id:number,dataObj:any){
    return this.http.put(`http://localhost:9990/find/${id}`,dataObj)
    
  }

  getProductById(id:number):Observable<Object>{
    // return this.data.find(p => p.id == id);
    return this.http.get(`http://localhost:9990/find/${id}`)
 }

  deleteVideo(videotitle: string){
    return this.http.get("http://localhost:9990/delete/"+videotitle);
  }
}
