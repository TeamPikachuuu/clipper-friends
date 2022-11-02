const express = require('express');
const path = require('path'); // NEW
 

const hairController = require('./controllers/hairControllers')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
  foo: 'bar',
  bar: 'foo'
};
app.use(express.static(DIST_DIR)); // NEW

app.get('/data/:id', hairController.getInfo, (req, res)=> {
  res.status(200).json(res.locals.getInfo)
})

app.post('/data', hairController.addInfo, (req, res) => {
  res.status(200).json("success");;
});

app.get('/api', (req, res) => {
  res.send(mockResponse);
});
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
 console.log('App listening on port: ' + port);
});

