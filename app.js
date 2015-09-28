console.log(__dirname)
var express = require('express');
var app = express();
var path = require('path');
var handlebars = require('express3-handlebars').create({defaultLayout: 'main'});
app.set('port', process.env.PORT || 3000)

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/',function (req, res) {
//     res.type('text/plain')
//     res.send('Samlin Blog')
// })
var index = require('./routers/index');
app.use('/',index);
app.use(function (req, res, next) {
    res.status(404)
    res.render('404')
})
app.use(function (err, req, res, next) {
    res.status(500)
    res.render('500')
})

app.listen(app.get('port'),function () {
    console.log('express runs on 3000 port')
})
