const express=require("express")
const bodyParser = require('body-parser')

const {getuser,postuser}=require("./service/user")

const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get("/",getuser)

app.post("/",postuser)

app.listen(4000, () => console.log("server port connected"));