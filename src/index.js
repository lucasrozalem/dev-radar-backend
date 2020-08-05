const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb://localhost:27017/week10',{
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);
//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parametros

//Query Params: request.query (Filtros, ordenação, paginação)
//Route Params: request.parans (Identificar um recurso na alteraçao ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)



app.listen(3333);