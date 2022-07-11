import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/model/client.service';
import { Photo } from 'src/app/model/photo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // constructor(private route:ActivatedRoute ,
  //             private clientSer:ClientService ) { }

  // ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get("id")
    // this.selectedPhoto()
  // }

  // id:any;
  // selectedPhoto$!:Observable<Photo[]>

  // selectedPhoto(){
  //  this.selectedPhoto$ = this.clientSer.selectedPhoto(this.id) 
  // }
























  constructor(private route:ActivatedRoute ,
              private clientSer: ClientService){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.selectedPhoto()
  }
  id:any;
  selectedPhoto$!:Observable<Photo[]>
  selectedPhoto(){
    this.selectedPhoto$ = this.clientSer.selectedPhoto(this.id)
  }

}
