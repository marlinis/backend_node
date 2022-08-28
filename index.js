const { application } = require('express');
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');

// Importar middleware
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler'); //importar las funciones que se uilizarán

const app = express();
const port = 3000;
//const IP = '192.168.3.117';

//Creando midleware de express para presentar los datos en formato JSON
app.use(express.json());

//validando acceso con los cors
const whitelist = ['http://localhost:8080', 'https://myapp.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};
app.use(cors(options));

//Creando Rutas
app.get('/', (req, res) => {
  res.send('Mi Primer Server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Soy la nueva ruta');
});

//llamado a la api de ruteo en routes->index.js
routerApi(app);

// Utilizamos los middleware. Siempre deben ir después del routing:
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  //console.log('http://' + IP + ':' + port + '/');
  console.log('Escuchando en el puerto:' + port);
});
