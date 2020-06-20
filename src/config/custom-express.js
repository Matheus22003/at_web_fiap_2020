const express = require(`express`);
const app = express();
const session = require('express-session');
const handlebars = require('express-handlebars');
const flash = require(`connect-flash`);
const bodyParser = require("body-parser")
const path = require(`path`);

app.use(session({
    secret: '220303mat',
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());

app.use((req, res, next) => {
    
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    res.locals.user = req.user || null;
    next();

})

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "../../public")));

module.exports = {
    app
}