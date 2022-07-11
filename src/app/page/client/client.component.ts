import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService } from 'src/app/model/client.service';
import { Photo } from 'src/app/model/photo';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private clientSer: ClientService) { }

  ngOnInit(): void {
    this.showPhotos()
  }

  // photos$ !: Observable<Photo[]>
  //   showPhotos(){
  //   this.photos$ = this.clientS.getPhotos()
  // }





















  photos$! : Observable<Photo[]>

  showPhotos(){
    this.photos$ = this.clientSer.getPhotos()
  }


  
}
