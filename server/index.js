const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static(__dirname + '/../public/build'));

const controllerFile = require('./Controllers/messagesController.js');

const baseUrl = "/api/messages";

app.post(baseUrl, controllerFile.create);
app.get(baseUrl, controllerFile.read);
app.put(`${baseUrl}/:id`, controllerFile.update);
app.delete(`${baseUrl}/:id`, controllerFile.delete);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

