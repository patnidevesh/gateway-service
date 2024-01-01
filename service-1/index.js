const express = require('express');
const PORT = 3000;

// App
const app = express();
app.get('/serviceone', async (req, res) => {
    res.send({"msg":'Hello World!: SERVICE-1'});
});
app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});