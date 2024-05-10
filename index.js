const express = require('express')
const exphbs = require('express-handlebars')

const { Cookie } = require('express-session')
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const flash = require('express-flash')

const nodemailer = require('nodemailer')

const conn = require('./db/conn') 

const siteRoutes = require('./routes/siteRoutes')

const dbSite = require('./models/dbSite') 

const app = express()

app.use(
    express.urlencoded({
         extended: true
    })
)
app.use(express.json())


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public')) 



app.use(
    session({
          name: 'session',
          secret: 'nosso_secret',
          resave: false,
          saveUninitialized: false,
          store: new FileStore({
              logFn: function() {}, 
              path: require('path').join(require('os').tmpdir(), 'session'),
          }),
          cookie: {
              secure:false,
              expires: new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)),
              httpOnly: true
          }
    })
)
app.use((req, res, next)=>{
        if(req.session.userid){
             res.locals.session = req.session
        }
        next()
})


app.use(flash())




app.use('/', siteRoutes) 



const PORT = process.env.PORT || 3000;

conn.sync().then(()=>{
    app.listen(PORT)
}).catch((err) => console.log(err))
// {force:true}