# Curso de Angular

## Ramas

**********************
introduction-to-angular
-----------------------

- Se instalo  <a href="https://nodejs.org/en/" target="_blank">nodejs</a>.
- Se instalo el manejador de paquetes web <a href="https://bower.io/" target="_blank">bower</a>
- Se creo en la raiz del proyecto el archivo <code>bower.json</code> en el cual se agregaron
  las dependencias front-end iniciales para trabajar: Boostrap, font-awesome y
  Angular.
- Se creo la jerarquia de carpetas para iniciar el proyecto.
- Se creo el archivo <code>menu.html</code> donde se exploraron
  las directivas básicas de angular: <a href="https://docs.angularjs.org/api/ng/directive/ngApp" target="_blank">ng-app</a>, <a href="https://docs.angularjs.org/api/ng/directive/ngInit" target="_blank">ng-init</a>, <a href="https://docs.angularjs.org/api/ng/directive/ngModel" target="_blank">ng-model</a>, <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">ng-repeat</a>.
- Para visualizar el resultado debemos primero correr <code>bower install</code>
  y luego abrir en el navegador el archivo <code>menu.html</code>.

model-view-controller
---------------------

- Se creo un script en <code>menu.html</code> el cual definirá la aplicación
  de angular y los controladores que definiran las funcionalidades.
- Se agrego en la etiqueta ng-app el nombre de la app y se agrego la etiqueta
  <a href="https://docs.angularjs.org/api/ng/directive/ngController" target="_blank">ng-controller</a> para acceder a la lógica que definimos en el script.
- El uso de la palabra `this` en el script nos dice que vamos
  a poder acceder a estas variables desde el html.

filter
------

- Se uso el <a href="http://www.w3schools.com/bootstrap/bootstrap_tabs_pills.asp" target="_blank">tab de boostrap</a> para introducir el uso de filtros y el <a href="https://docs.angularjs.org/api/ng/directive/ngClass" target="_blank">ng-class</a> para usar la clase active
o no, segun la función <code>isSelected</code> en el script.
- Segun en el tab en que se encuentre se debe filtrar por categoria, esto significa que solo se debe mostrar la infromación de la variable
  <code>dish</code> que sea igual a la categoria que se definio en la función <code>select</code> del script
  y para esto usamos dentro del <code>repeat</code> el filtro <a href="https://docs.angularjs.org/api/ng/filter/filter" target="_blank">filter</a>, sin embargo existen <a href="https://docs.angularjs.org/api/ng/filter" target="_blank">otros filtros</a> muy utiles.

assignment-1
------------

- Se debe mostrar el detalle de cada `dish` en un html nuevo llamado `dishdetail.html` y para eso se
  hace uso de la clase [media object](http://getbootstrap.com/components/#media) de boostrap, donde se utilizará
  un media object anidado donde el segundo serán los comentarios del plato.
- Cada comentario debe visualizarse con la clase [blockquote](http://getbootstrap.com/css/#type-blockquotes) y para
  eso se recorren los comentarios y se usa el filtro de [fechas ](https://docs.angularjs.org/api/ng/filter/date) de angular  
  para darle un formato.
- Se deben ordenar los comentarios segun el criterio del usuario y para ello se usa el filtro [orderby](https://docs.angularjs.org/api/ng/filter/orderBy).

*****************

grunt-and-gulp
--------------

- Se instaló `grunt` para correr automaticamnete el proyecto y que se reflejen los cambios inmediatamente en modo desarrollador.
- Se debe instalar primero la interfaz de linea de comandos del grunt con `sudo npm install -g grunt-cli`, la cual se encarga de buscar y cargar el grunt local, además de aplicar la configuración del `Gruntfile.js`.
- Se debe crear en la raiz del proyecto, el archivo `package.json` para agregar los modulos de nodejs, para nuestro caso ya esta creado y basta con correr el comando `sudo npm install`.
- Se creo en la raiz del proyecto el archivo `Gruntfile.js`, el cual tendra toda la configuración de cada una de las tareas, explicadas en el archivo.
- El script que se encontraba en `menu.html` se traslado a un archivo script en `app\scripts\app.js`.
- para correr grunt en la linea de comandos escribimos `grunt serve`


- se instaló `gulp` el cual hace lo mismo que grunt, y es otra aproximaxion un poco más eficiente segun la comunidad de JS.
- Se debe instalar primero la interfaz de linea de comandos del gulp con `sudo npm install -g gulp` la cual se encarga de buscar y cargar el grulp local, además de aplicar la configuración del `gulpfile.js`.
- Se debe crear en la raiz del proyecto, el archivo `package.json` para agregar los modulos de nodejs, para nuestro caso ya esta creado y basta con correr el comando `sudo npm install`.
- Se creo en la raiz del proyecto el archivo `gulpfile.js`, el cual tendra toda la configuración de cada una de las tareas, explicadas en el archivo.
- para correr gulp en la linea de comandos escribimos `gulp watch`.
- De ahora en adelante pueden utilizar cualquiera para visualizar los cambios en tiempo real, sinembargo se recomienda gulp.

scope
-----

- Se cambio la forma de trabajar con el controller y asi poder hacer uso del `$scope` y llamar directamente las variables y funciones en el `menu.html` sin tener que usar el prefijo `as` como se ha venido haciendo.
- Se agrego el modulo `gulp-ng-annotate` al package.json para que al minificar el JS no se lo haga al scope y asi funcione correctamente.
- Se cambio el nombre del controlador tanto en el `app.js` como en el `menu.html` y ademas se cambio todo `this` por `$scope`, resultando en la eliminación de todos los prefijos `menuCtrl.`.
