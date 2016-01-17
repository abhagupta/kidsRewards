let express = require('express')
let passport = require('passport')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let session = require('express-session')
let mongoose = require('mongoose')
let LocalStrategy = require('passport-local').Strategy
let nodeifyit = require('nodeifyit')
let morgan = require('morgan')
let flash = require('connect-flash')

let passportMiddleware = require('./middleware/passport')
let routes =  require('./routes.js')

let User = require('./models/User.js')


require('songbird')



//mongoose.connect('mongodb://127.0.0.1:27017/Rewards')


let app = new express()
app.passport = passport
const PORT = process.env.PORT || 7000


app.use(morgan('dev'))
app.use(cookieParser('ilovethenodejs'))    
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(session({
  secret: 'ilovethenodejs',
  resave: true,
  saveUninitialized: true
}))

// Use the passport middleware to enable passport
app.use(passport.initialize())

// Enable passport persistent sessions
app.use(passport.session())
app.use(flash())
app.listen(PORT, () => console.log(`LISTENING @ http://127.0.0.1:${PORT}`))



passportMiddleware(app)
routes(app)



