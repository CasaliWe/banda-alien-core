//MODELS
const dbSite = require('../models/dbSite')

//NODEMAILER
const nodemailer = require('nodemailer')

//DOTENV
require('dotenv').config()


//USER E SENHA PARA ENVIO DO EMAIL
const user = 'aliencorerock@gmail.com'
const pass = 'fblo aehn wssb hugy'

const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      port: 587,
      secure: false,
      auth: {
          user, pass   
      }
})






module.exports = class actionControllers {

        //ENVIAR FORMULÁRIO
        static envioForm(req,res){
            /*
            var nome = req.body.nome
            var email = req.body.email
            var wpp = req.body.whatsapp
            var mensagem = req.body.mensagem

            //PARA O USUÁRIO
            transporter.sendMail({
                from: user,
                to: email,
                subject: 'Recebemos o seu contato!',
                html: `
                       <p>Olá ${nome}, A banda Alien Core fica feliz pelo seu interesse, logo entraremos em contato, Tenha um bom dia!</p>
                       
                       <img src="https://aliencore.website/img/site/banner-agenda.png" style="width: 100%; margin-top: 35px;">
                      
                       `
            }).then((info)=>{console.log('Email Enviado para o user')}).catch(err => console.log(err))

            //PARA O WESLEI
            transporter.sendMail({
                from: user,
                to: 'wesleicasali18@gmail.com',
                subject: 'Site Alien Core!',
                html: `

                      <p>Nome: ${nome}</p>
                      <p>Email: ${email}</p>
                      <p>Whatsapp: ${wpp}</p>
                      <p>Mensagem: ${mensagem}</p>
                      
                `
            }).then((info)=>{console.log('Email Enviado para SEO')}).catch(err => console.log(err))
            */

            req.flash('message','Contato enviado com sucesso!') 
            req.session.save(()=>{
                res.redirect('/#contato')
            })
               
        }

}