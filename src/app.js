const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const path = require('path');

//// importar rutas
const customerRoutes = require('./routes/customers');
//// settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'dbproveedores'
},'single'));
app.use(express.urlencoded({extended:true}));


//// routes
app.use('/',customerRoutes);

//// static files
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'),()=>{
    console.log('Server on port 3000');
});