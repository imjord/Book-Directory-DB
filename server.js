
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bookRoute = require('./routes/bookRoutes');


// routes



app.use('/books', bookRoute);

db.once('open', () =>{
    console.log('db open')
    app.listen(PORT, () => {
        console.log(`live on ${PORT}`)
    })
})
