require('dotenv').config(); //".config" = para que tome todo mi archivo de dotenv y establezca las variables de entorno 
const Server = require('./models/server');


const server =  new Server();

server.listen();

