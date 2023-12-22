
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const adminRouter = require('./router/admin');
const shopRouter = require('./router/shop');
const contactRouter = require('./router/contactus');
const successRouter = require('./router/success');
const errorController = require('./controllers/error')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRouter);
app.use(shopRouter);
app.use(contactRouter);
app.use(successRouter);

app.use(errorController.get404);



app.listen(4000);

