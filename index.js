const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('This is main page')
})
app.get('/about', (req, res) =>{
  res.send('This is about page')
})

app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`)
})