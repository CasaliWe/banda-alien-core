const express = require('express')
const router = express.Router()

//CONTROLLERS
const siteControllers = require('../controllers/Controllers')
const actionControllers = require('../controllers/ActionsControllers')


//HOME
router.get('/', siteControllers.home)

//SOBRE
router.get('/sobre', siteControllers.sobre)

//AGENDA
router.get('/agenda', siteControllers.agenda)

//GALERIA
router.get('/galeria', siteControllers.galeria)

//NOTICIAS
router.get('/noticias', siteControllers.noticias)

//NOTICIA
router.get('/noticia/:id', siteControllers.noticia)




//ENVIO FORM PRINCIPAL
router.post('/envioFormPrincipal', actionControllers.envioForm)



module.exports = router