

const express = require('express');

const app = express();

app.all('/*', function(req, res ) {
  console.log("Recieved req "+req.originalUrl)
  res.redirect("https://personal.kirivascripting.repl.co"+req.originalUrl)
})

app.listen(3000, () => {
  console.log('server started');
});
