const express= require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const requestController = require("./components/controllers/requestController");
const app = express();

//Enable CORS from React Development Site
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "http://192.168.8.100:3000");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    response.header("Access-Control-Allow-Credentials", "true");
    next();
});
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//Start controller
requestController(app);
//Start app
app.listen(8080, "192.168.8.100");
console.log("Server started listening on port 8080...");