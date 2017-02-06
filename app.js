const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const upload = multer({dest: './uploads'});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/filesize', upload.single('file'), (req, res, next) => {
  let file = req.file;
  res.json({"size": file.size});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server up on port: ${port}!`);
});
