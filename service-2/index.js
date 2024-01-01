const express = require('express');
const PORT = 3001;

// App
const app = express();
app.get('/servicetwo', async (req, res) => {
    res.send({"msg":'Hello World!: SERVICE-2'});
});
app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});