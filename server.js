const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, './build')));
app.get('', (req, res) => {
  res.render('index')
})
app.get('/categories', (req, res) => {
  const filePath = path.join(__dirname, 'db.json');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle error, e.g., send an error response
      res.status(500).send('Error reading file');
      return;
    }
    const jsonData = JSON.parse(data);
    // Send the JSON data as the response
    res.send(jsonData);
  });
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});