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

            const id = req.params.id

            //Noticias únicas
            var noticia0 = {
                titulo: 'Nova formação',
                data: 'Abril - 2024',
                imagem: '/img/site/capa-show.jpg',
                descri: 'banda Alien Core anunciou recentemente uma nova formação, marcando um novo capítulo em sua trajetória musical. Com a saída de Jasan e Wilson, a banda se reorganiza com Jean assumindo a guitarra, e Gui, anteriormente focado nos vocais, agora desempenhando um papel duplo como vocalista e baixista. A banda trabalha em novas composições para somar aos singles "Bad Taste in Men" e "This Woman", além de novos covers. Fiquem ligados para novidades.'
            }

            var noticia1 = {
                titulo: 'This Woman - Novo single',
                data: 'Feveiro - 2024',
                imagem: '/img/site/this-woman.jpeg',
                descri: 'De volta a ativa, novo single será lançado dia 17 de fevereiro de 2024, "THIS WOMAN", aguardem...'
            }

            var noticia2 = {
                titulo: 'Prestes a lançar seu segundo single',
                data: 'Novembro - 2023',
                imagem: '/img/site/example1.jpg',
                descri: 'À medida que o ano chega ao seu encerramento, a banda Alien Core está se preparando para lançar seu muito aguardado segundo single, programado para ser lançado em dezembro de 2023. Este novo single promete apresentar uma vibe distinta e envolvente, diferente do seu antecessor. Mantenha-se atento para mais informações e atualizações sobre este lançamento, que promete surpreender e cativar os ouvintes.'
            }
            var noticia3 = {
                titulo: 'Bad Taste In Man - Novo single lançado',
                data: 'Setembro - 2023',
                imagem: '/img/site/capa-single.jpeg',
                descri: 'A banda Alien Core está prestes a conquistar os ouvidos dos fãs de música com o seu mais recente single, intitulado "Bad Taste in Man". Este novo lançamento está agendado para o dia 12 de setembro e estará disponível em todas as principais plataformas digitais. Prepare-se para ser envolvido por essa experiência musical única e emocionante. Marque a data em seu calendário e não perca este lançamento imperdível!'
            }
            var noticia4 = {
                titulo: 'Uma parceria forte',
                data: 'Setembro - 2023',
                imagem: '/img/site/example2.jpg',
                descri: 'Em um emocionante encontro no palco do Maroca Bar, as icônicas bandas Alien e Royalhood uniram seus talentos e energias musicais, dando início a uma promissora parceria. Quem testemunhou essa incrível colaboração ao vivo mal pode esperar por 2024, quando as duas bandas planejam uma série de eventos espetaculares que prometem agitar o cenário musical. Fique ligado para mais novidades sobre essa parceria que deixará uma marca no cenário musical!'
            }
             


            var noticia = ''
             
            if(id == 0){
                noticia = noticia0
            }else if(id == 1){
                noticia = noticia1
            }else if(id == 2){
                noticia = noticia2
            }else if(id == 3){
                noticia = noticia3
            }else if(id == 4){
                noticia = noticia4
            }



            res.render('noticia', {layout: 'noticias', noticia})
        }

}