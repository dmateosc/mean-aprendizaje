'use strict'

var Project = require('../models/project');
const project = require('../models/project');

var fs = require('fs');

var controller = {

    home: function(req, res){

        return res.status(200).send({
            message: 'Soy la home'
        })

    },

    test: function(req,res){
        return res.status(200).send({

            message : "Soy el metodo o accion test del controlador de project"
        });


    },


    saveProject: function(req, res){
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;
        

        project.save((error,projectStored) => {
            if(error) return res.status(500).send({message : "Error al guardar"})
            
            if(!projectStored) return res.status(404).send({message: "No se ha podido guardar el project."})

            return res.status(200).send({project: projectStored})
        })
    },


    getProject: function(req, res){
        
        var projectId = req.params.id;

        Project.findById(projectId, (error, project)=>{

            if(error) return res.status(500).send({message : "Error al obtener el dato"});

            if(!project) return res.status(404).send({message : "No se ha podido obtener el proyecto"});

            return res.status(200).send({
                project
            })


        })


    }
    ,
    listProject: function(req, res){
        
        var params = req.params;

        Project.find({year :{ $gte : params.year}}).sort(+year).exec((error, project)=>{

            if(error) return res.status(500).send({message : "Error al obtener el dato"});

            if(!project) return res.status(404).send({message : "No se ha podido obtener el proyecto"});

            return res.status(200).send({
                project
            })


        })


    },

    updateProject: function(req,res){

        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update,  (error, project) => {
            if(error) return res.status(500).send({
                message : "Error al actualizar"
            });
            if(!project) return res.status(4040).send({
                message : "No se ha podido actualizar el id"
            })

            return res.status(201).send(project);

        })
    },
    deleteProject: function(req,res){

        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId,(error, project) =>{
            if(error) return res.status(500).send({
                message : "Error al borrar"
            });
            if(!project) return res.status(4040).send({
                message : "No se ha podido borrar"
            })

            return res.status(201).send(project);
        })
    },
    uploadImage :function(req,res){
        var projectId = req.params.id;
        var fileName = "Imagen no subida...";

        if (req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image:fileName},{new: true}, (error, project) =>{

                    if(error) return res.status(500).send({message : "El archivo no se ha subido"});

                    if(!project) return res.status(404).send({
                        message : "No se ha encontrado la imagen"
                    });
                    return res.status(200).send({files : fileName});
                });
            }else{
                fs.unlink(filePath, (error) => {
                    return res.status(200).send({message : "La extensión no es valida"});
                })
            }
            
        }else{
            return res.status(200).send({message : fileName});
        }
    }

};

module.exports = controller;