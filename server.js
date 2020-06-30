const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));



app.get('*', (req, res) => {
    res.send(`
        <h1>
            Hey, there's nothing here.\n
            Click <a href="/index.html">here</a> to go to the home page.
        </h1>
    `)
})
app.listen(PORT)