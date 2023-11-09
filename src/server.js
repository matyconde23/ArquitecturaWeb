
const express = require('express');

var path = require('path')
var morgan = require('morgan')
const exphbs = require("express-handlebars");
const _handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const methodOverride = require('method-override')



var app = express();

// view engine setup
app.set('port', process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

const hbs = exphbs.create({
  runtimeOptions: {
    allowProtoPropertiesByDefault: true
  },
  defaultLayout: "main",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: ".hbs",
  handlebars: allowInsecurePrototypeAccess(_handlebars)
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

//routes
app.use(require('./routes/index'))
app.use(require('./routes/torneos.routes'))


app.use(express.static(path.join(__dirname, "public")));

module.exports = app;



