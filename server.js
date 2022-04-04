
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection')



// routes

const bookRoute = require('./routes/bookRoutes');

app.use(express.urlencoded({extended: false}))
app.use(express.json());



app.use('/books', bookRoute);


app.get('/', (req,res) => {
    res.send('hello')
})


db.once('open', () =>{
    console.log('db open')
    app.listen(PORT, () => {
        console.log(`live on ${PORT}`)
    })
})
