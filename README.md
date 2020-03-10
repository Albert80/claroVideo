# Clarovideo

Prueba de Ingreso STV

### `git clone https://github.com/Albert80/claroVideo.git`

Clonar el repo vía HTTPS.

### `npm i`

Una vez finalizada la clonación se instalan las librerías con el comando `npm i` ó `npm install` 

### `npm start`

Inicializa el servidor de pruebas para que visualicemos localmente la aplicación.

### `npm build`

Preparamos la aplicación para producción creando el directorio `build`. Esto optimizará la aplicación para un mejor rendimiento.

### `npm test`

**Pruebas unitarias**
Se inicializarán las pruebas unitarias localizadas en
src/App.test.js

### Deployment

El repo esta conectado con el proveedor zeit.co sólo se requiere agregar los cambios al branch master de Github y **zeit** hará el resto. Se pueden ver los cambios en:
https://claro-video.now.sh/

Procedimiento para agregar cambios:
`git add .`
`git commit -m "Nueva versión de la aplicación"`
`git push`

