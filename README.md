# E-Crypt: Mercado de Criptomonedas

Proyecto creado utilizando React (Javascript) como front-end y Firebase como back-end. El objetivo de la aplicación consiste en brindar a los usuarios la capacidad de poder observar, comprar y vender todo tipo de criptomonedas, incluyendo la capacidad de realizar transacciones utilizando métodos modernos de pago como lo es una "crypto-wallet".

El proyecto puede ser accesado a través del siguiente [link](https://ecrypt-nc-g63.herokuapp.com/)

## Pasos para Deployment (Heroku)

1. Moverse a la carpeta del proyecto `cd "CARPETA-PROYECTO"`
2. Crear una cuenta de [Heroku](https://id.heroku.com/login) e instalar el Heroku CLI (Command Line Interface).
3. Ingresar a Heroku desde la consola: `heroku login`
4. Asegurarse de que exista un repo adentro de la carpeta de proyecto. En caso que no exista, inicializar el repo dentro de la misma carpeta en la que está el archivo `package.json`: `git init`
5. Crear un proyecto dentro de Heroku (El nombre no es único para el usuario, sino para todos los usuarios de Heroku, por lo que puede que ya esté tomado): `heroku create APPNAME`
6. Para corroborar que funciona se puede abrir la nueva app: `heroku open -a APPNAME`
7. Se agrega el nuevo remoto de Heroku al repositorio local: `heroku git:remote -a APPNAME`
8. Instalar express: `npm install express --save`.
9. Crear un archivo para el servidor dentro de la carpeta `server`. [Utilizar express para crear un servidor estático](https://betterprogramming.pub/how-to-deploy-your-react-app-to-heroku-aedc28b218ae).
10. Crear un "production build" de la aplicación: `npm run build`.
11. Crear un Procfile, para indicarle a Heroku el comando a correr para hacer correr nuestro servidor estático.
12. Configurar las variables de entorno adentro del archivo `.env` dentro de Heroku: `heroku config:set VARIABLE_NAME=value`
13. "Pushear" los cambios de rama actual a Heroku: `git push heroku master:main`
14. Abrir la aplicación: `heroku open`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.