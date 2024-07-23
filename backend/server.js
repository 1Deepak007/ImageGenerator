const express = require('express');
const app = express();
const port = 3003;


app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING ON PORT : ${port}`);
})

app.get('/about', (req, res) => {
    res.send('about')
})
