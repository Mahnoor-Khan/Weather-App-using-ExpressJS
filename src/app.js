const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// public static path
let staticPath = path.join(__dirname , '../public')
app.use(express.static(staticPath))

// rouitng
app.get('/' , (req, res) => {
    res.send('New App created')
});
app.get('/weather' , (req, res) => {
    res.send('Welcome to weather page')
});
app.get('/about' , (req, res) => {
    res.send('Welcome to about page')
});
app.get('*' , (req, res) => {
    res.send('Page not Found , 404 ERROR!')
});

app.listen(port , ()=>{
    console.log(`Listening at port ${port}`)
})