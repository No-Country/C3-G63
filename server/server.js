// Dependencias
const express = require('express');
const path = require('path');

// =======================
// SETUP
// =======================

// Pseudónimo para express
const app = express();

// Setear el path para carpeta de "public"
// Pasos:
// - __dirname: Carpeta actual
// - ..: Regresar una carpeta atrás
// - build: Dentro de la carpeta build
const publicPath = path.join(__dirname, "..", "build");
app.use(express.static(publicPath));

// =======================
// REQUESTS
// =======================

// Nos aseguramos que el archivo 'index.html' sea renderizado no importando la request
// GET que se realice al servidor. React tomará el control desde ahí.
app.get('/*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'));
})

// =======================
// INICIAR SERVIDOR
// =======================

// Se iguala el puerto a una variable de estado, si dicha variable no existe, se utiliza
// el puerto 3000 por defecto. Se hace esto, porque Heroku utiliza una variable de entorno
// para dictar el puerto de la aplicación, pero localmente la misma se puede probar usando
// el puerto 3000.

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

// Se inicializa el servidor
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})