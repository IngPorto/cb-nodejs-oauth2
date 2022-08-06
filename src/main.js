const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const cookieSession = require('cookie-session')
const routes = require('./routes/routes')
const { PORT } = require('./config')
require('./controllers/passport-setup')

app.use(cookieSession({name: 'cb-node-oauth-session', keys: ['key1', 'key2']}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

routes.assignRoutes(app);

app.listen(PORT, () => console.log(`serer is on port ${PORT}`))