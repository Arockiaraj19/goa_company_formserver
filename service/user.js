const mysql = require('mysql2');

//a mysql run docker container
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'database',
    password: 'arockia',
    database: 'USER'
});

connection.connect(function (err) {
    if (err) {

        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});



const getuser = (req, res) => {
    const text = 'SELECT * FROM users';
    connection.query(text, function (err, results, fields) {
        if(err){
           return res.send("some thing wrong");
        }
        return res.send(results);
       // fields contains extra meta data about results, if available
    })
}


const postuser = (req, res) => {
    const {name,number,image}=req.body;
    const text = 'INSERT INTO users(name,number,image) VALUES(?, ?,?)'
    const values = [name,number,image];
    connection.query(text,values, function (err, results, fields) {
        if(err){
            console.log(err);
           return res.send("some thing wrong");
        }
        return res.send("Added Succefully");
       
    })
}

module.exports = { getuser, postuser }