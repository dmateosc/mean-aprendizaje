import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/services/global';

import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {UploadService} from '../../services/upload.services';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
      private _projectService: ProjectService,
      private _uploadService : UploadService

  ) {
    this.title = "Crear Proyecto";
    this.project = new Project('','','','',2020,'','');


   }

  ngOnInit(): void {
  }

  onSubmit(form):void{
      this._projectService.saveProject(this.project).subscribe(
        response =>{
          console.log(response);
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.filesToUpload,'image')
          .then((result:any)=>{
            this.status="success";
            form.reset();
          });
        },
        error =>{
          console.log(error);
        }
      )
  }
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
