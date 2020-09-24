import { Injectable } from '@angular/core';
import { Global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable()
export class UploadService{
	public url: string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	makeFileRequest(url: string, params: Array<string>, file: Array<File>, name: string){
	//importante ponerle esto a los headers
	let headers = new HttpHeaders().set('enctype','multipart/form-data');
	//Alternativa
	 var formData:any = new FormData();
	for(var i = 0; i<file.length; i++){
		formData.append(name, file[i],file[i].name);
	}
	for (var p of formData){
		console.log(p);
	}
	return this._http.post(url,formData,{headers:headers}); 
	}

}