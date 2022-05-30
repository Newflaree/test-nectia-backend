# Prueba técnica FullStack Developer - Nectia

## Resumen superficial de la API:
El desarrollo de la prueba consiste en la implementación de un CRUD productos, pasando por la creación de usuarios. Estos se pueden logear en la app y listar a los demás usuarios, a la vez que eliminar usuarios.

Por la parte del producto, elegí hacer un CRUD de notebooks. El usario debe estar logeado y validado con un JWT para poder realizar la mantención de los equipos. 

Adicionalmente se agregó un servicio para buscar por collection y por termino de busqueda, y otro servicio que sube una imágen de perfil para los usuarios o imágen de producto para los notebooks.

## Instrucciones de instalación:
Primero que todo, vamos a instalar los módulos de node para que nuestro proyecto disponga de las depencendias que hacen la mágia.
```
yarn
```
```
npm install
```

Una vez reconstruidos los node_modules/, vamos a compilar nuestro proyecto de TypeScript a JavaScript. Esto lo hacemos con el comando tsc y creará el directorio dist/.
```
tsc
```

Ahora que tenemos nuestro proyecto compilado, vamos a cargar las variables de entorno. Para esto creamos un archivo .env en la raíz del proyecto.

Cuando las variables estén cargadas podemos levantar el proyecto con uno de los siguientes comandos
Para producción:
```
yarn start
```
```
npm run start
```
Para desarrollo:
```
yarn start:dev
```
```
npm run start:dev
```
