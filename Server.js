const express = require('express')
const cors=require('cors')
const app = express();
const mysql = require('mysql');
//enable the express server to respond to preflight requests.
app.use(cors())
const connection = mysql.createConnection({
    host: 'database-2.csyl7ea5qdf5.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '10021998',
    database: 'friends',
    port: '3306'

});

connection.connect((err)=>{
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('peteProb')
});
//req is the http request res is the response
app.get('/friends',(req, res) => {
    const query = 'SELECT * FROM friends'
    connection.query(query, (err, result) =>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
})

app.post('/friends', (req,res)=>{
    const query = 'INSERT INTO friends (fullName, email, phoneNumber,people,message) VALUES (?,?,?,?,?,?)'
    
    connection.query(query, (err, result) =>{
        if(err){
            throw err
        }else{
            res.send(result)
        }
    })
 
});

// return response;



 


//localhost:5000/products
app.listen(5000, (error) => {
    if(error){ 
        throw error
    }else{console.log('connected to server')}
})
