'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();

var multer = require('multer');

//definir donde vamos a guardar y el nombre del fichero que subimos, sino le pone uno por defecto
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})
var multipartMiddleware = multer({ storage: storage }); 

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);
router.get('/projects', ProjectController.getProjects);
router.put('/project/:id', ProjectController.updateProject);
router.delete('/project/:id', ProjectController.deleteProject);
router.post('/upload-image/:id', multipartMiddleware.single('image'), ProjectController.uploadImage);
router.get('/get-image/:image', ProjectController.getImageFile);

module.exports = router;