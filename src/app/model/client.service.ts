import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo'; 

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // constructor( private http : HttpClient) { }

  // getPhotos(){
  //   return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
  // }

  // selectedPhoto(id:number){

  //   let params = new HttpParams().set("id", id.toString())

  //   return this.http.get<Photo[]>("https://jsonplaceholder.typicode.com/photos", {params})
  // }






















  constructor(private http:HttpClient){}
  ROOT_ADDRESS :string = "https://jsonplaceholder.typicode.com"
  getPhotos(){
    return this.http.get<Photo[]>(this.ROOT_ADDRESS + "/photos")
  }

  selectedPhoto(id:number){
    let params = new HttpParams().set("id" , id.toString())
    return this.http.get<Photo[]>(this.ROOT_ADDRESS + "/photos" , {params})
  }


}
