
/*     Clase 44 Node:
      Comandos basicos de NPM    */
npm init
// Inicializar el proyecto crea el archivo package.json
npm search [nombreDelPaquete]
// Buscar paquetes
npm install [nombreDelPaquete]
/*Instalar un paquete ;   */

npm install nombreDelPaquete@version
/*
Instalar una version especifica de un paquete
usando “version” irá la versión especificada, de lo contrario, si no
se especifica, se instalará la última disponible.
*/
npm install [nombreDelPaquete] --save
/*
Instalar el paquete y modifica el archivo package.json agregando
 la librería en las dependencias
*/
npm install [nombreDelPaquete] --save-dev
/*
Instalar el paquete y modifica el archivo package.json
agregando la librería en las dependencias solo necesarias
para desarrollo
*/

npm install
/*
Si no se especifica un paquete, se entiende que se desea
verificar/instalar todas las dependencias dentro del archivo
 package.json. Esto es habitual, cuando se descargan proyectos
o aplicaciones de github, ya que las dependencias deben ser
instaladas luego de descargar el proyecto (por razones de tamaño).
Con la opción -g o –global se le está indicando a npm que debe
instalar el paquete de manera Global, esto quiere decir que se
 va a poder utilizar desde cualquier directorio.
*/
npm rm [nombreDelPaquete]
npm uninstall [nombreDelPaquete]
//Eliminar paquete local
npm ls
// Listar las dependencias de nuestro proyecto
npm update -save
//Actualizar todas las librerías de tu proyecto que sean compatibles
