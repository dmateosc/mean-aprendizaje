import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import {Global} from './global';

@Injectable()
export class ProjectService{

    public url: string;
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;

    }


    testService(){
        return 'Probando el servicio de angular nuevo';
    }

    saveProject(project:Project): Observable<any>{
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type','application/json');

        //se le pasa al metodo post, la url, los parametros y los header como valor headers
        return this._http.post(this.url+'save-project',params,{headers:headers});


    }

    getProjects(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        
        return this._http.get(this.url+'projects',{headers:headers});


    }
    getProject(id:string): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');

        return this._http.get(this.url+'project/'+id,{headers:headers});

    }

}