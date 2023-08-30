const express = require('express');

const mysql2 = require('mysql2').promise(); 
const PORT = process.env.PORT || 3001; 

const app = express();


// Middleware to handle parsed JSON data
app.use(express.json());

const db = mysql2.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'department_db',
        password: ""
  
    }, 
    console.log(`Connected to department_db data.`)
);

db.query('SELECT * FROM  ', (err, results) => {
    console.log(results);
});
db.query('SELECT * FROM  ', (err, results) => {
    console.log(results);
});
db.query('SELECT * FROM  ', (err, results) => {
    console.log(results);
});


// Default response to other query response (NOT found)
app.use((req, res) =>{
    res.status(404).end();
})


app.listen(PORT, () => {
    console.log(`now listening to https//:localhost${PORT}`)
})