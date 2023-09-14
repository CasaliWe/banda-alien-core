//MODELS
const dbSite = require('../models/dbSite')

//DOTENV
require('dotenv').config()








module.exports = class siteControllers {

        //EXIBE A HOME
        static home(req,res){
              res.render('home', {layout: 'home'})
        }

        //EXIBE SOBRE
            static sobre(req,res){
            res.render('sobre', {layout: 'home'})
        }

        //EXIBE A GALERIA
        static galeria(req,res){
            res.render('galeria', {layout: 'home'})
        }

        //EXIBE A AGENDA
        static agenda(req,res){
            res.render('agenda', {layout: 'home'})
        }

        //EXIBE NOTICIAS
        static noticias(req,res){
            res.render('noticias', {layout: 'home'})
        }

        //EXIBE NOTICIA
        static noticia(req,res){
            res.render('noticia', {layout: 'home'})
        }

}