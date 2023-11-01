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
            res.render('sobre', {layout: 'sobre'})
        }

        //EXIBE A GALERIA
        static galeria(req,res){
            res.render('galeria', {layout: 'galeria'})
        }

        //EXIBE A AGENDA
        static agenda(req,res){
            res.render('agenda', {layout: 'agenda'})
        }

        //EXIBE NOTICIAS
        static noticias(req,res){
            res.render('noticias', {layout: 'noticias'})
        }

        //EXIBE NOTICIA
        static noticia(req,res){
            res.render('noticia', {layout: 'noticias'})
        }

}