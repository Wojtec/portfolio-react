const express = require('express');
const next = require('next');
const routes = require('../routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// SERVICE
const authService = require('./services/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const config = require('./config');

//Routes
const projectsRoutes = require('./routes/projects');
const nodeMailerRoutes = require('./routes/nodeMailer');



//MONGODB
mongoose.connect(config.DB_URI || process.env.DATABASE_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("MongoDB connected");

}).catch(err => console.log(err));



app.prepare()
.then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    

    server.use('/api/v1/projects', projectsRoutes);
    server.use('/api/v1/mail', nodeMailerRoutes);


    server.get('*',(req,res) => {
        return handle(req,res);
    })

    server.use(function (err, req, res, next){
        if (err.name === 'UnauthorizedError') {
            res.status(401).send({title: `Invalid token...`});
        }
    });

    server.use(handle).listen(process.env.PORT || 3000, (err) => {
        if(err) throw err
        console.log('> Ready on http://localhost:3000');
    })

}).catch((ex) => {
    console.error(ex.stack)
    process.exit(1);
})