import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorserviceService } from '../actorservice.service';
import { actormodal } from '../modal';
declare let $:any; 

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actordetails:FormGroup;
  actordata:any;
  actorobj:actormodal=new actormodal();
  showsubmit:boolean;
  showupdate:boolean;

  constructor(private builder:FormBuilder, private _api:ActorserviceService) { }

  ngOnInit(): void {
    this.actordetails=this.builder.group({
      'name':['',Validators.required],
      'movies':['',[Validators.required]]
    })
    this.get();
  }
  post(){
    this._api.postactor(this.actordetails.value)
    .subscribe(res =>{
      console.log(res);
      alert("added successfully");
      this.actordetails.reset();
      document.getElementById("exampleModal")?.click();
      this.get();
    },
    error =>{
      alert("error is occured");
    })
  }
  get(){
    this._api.getactor()
    .subscribe(res =>{
      console.log(res);
      this.actordata=res; 
    })
  }
  del(value:any){
    var del = confirm("Are you want to delete this id?");
    if(del){
    this._api.deleteactor(value.id)
    .subscribe(res =>{
      console.log(res);
      this.get();
    });
  }
  }
  edit(value:any){
    this.actorobj.actorid=value.id;
    this.actordetails.controls['name'].setValue(value.name);
    this.actordetails.controls['movies'].setValue(value.movies);
    this.showupdate=true;
    this.showsubmit=false;
  }
  update(){
    this._api.updateactor(this.actordetails.value,this.actorobj.actorid)
    .subscribe(res =>{
      alert("updated successfully");
      this.actordetails.reset();
      $("#exampleModal")?.click();
      this.get();
    })
  }
  hidebutton(){
   this.showsubmit=true;
   this.showupdate=false;
  }
  
}
