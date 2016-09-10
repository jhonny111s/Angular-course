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
- Se agrego la directiva [ngshow](https://docs.angularjs.org/api/ng/directive/ngShow) para mostrar u ocultar ([nghide](https://docs.angularjs.org/api/ng/directive/ngHide)) la descripción de los platos al presionar un boton.

forms
-----

- Se creo un nuevo html para introducir el uso de los formularios llamado `contactus.html`.
- Se creo en `app.js` un nuevo controlador llamado `ContactController` el cual se encargara del funcionamiento del formulario.
- se creo en `app.js` un nuevo controlador llamado `FeedbackController` para introducir las validación de los campos del formulario, los cuales deben tener un `name` para referenciarlos en los errores.
- Para mostrar u ocultar los mensajes de error del [formulario](https://docs.angularjs.org/api/ng/directive/form) se uso cerca del `input` un `span` que contiene los [servicios](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController) que brinda angular para las validaciones.

assignment-2
------------

- Se creo un formulario para agregar comentarios en el archivo `dishdetail.html` donde se debe mostrar la vista previa de los comentarios a medida que se escriba.
- Se creo un controlador en `app.js` llamado `DishCommentController` encargado de albergar el comportamiento del formulario de comentarios.
- Se creo el formulario para enviar los comentarios el cual debe [validar](http://www.w3schools.com/angular/angular_validation.asp) los campos con las [directivas](https://docs.angularjs.org/api/ng/type/ngModel.NgModelController) que brinda angular.
- Es importante observar que por medio del `name` del formulario y de los inputs se puede acceder a sus propiedades para hacer la validación.
- La función `submitComment` en `DishCommentController` se encargara de ejecutar, guardar y limpiar el formulario, todo esto al dar click en el boton submit.

*****************

factory-and-service
-------------------

- El metodo factory en `service.js` se usa para [inyectar una dependencias](https://docs.angularjs.org/guide/di) al modulo `confusionApp` en este caso todo el array dish por medio de unos metodos encapsulados en `menufac`.
- Usualmente la inyección de dependencias se usa para definir directivas, servicios o filtros creados por nosotros mismos.
- Se crearon dos archivos nuevos `controllers.js` y `service.js`, en controller se copiaron todos los controladores que se han creado y en el service se crearan todas las inyecciones de dependencia, mientras que el archivo `app.js` solo contendra la linea para llamar al modulo `confusionApp`.
- Existen dos maneras de hacer inyección de dependencias, la primera es con `factory` el cual devuelve un objeto que contiene las funciones y el otro es `service` el cual no devuelve nada por que usa `this`, para profundizar la diferencia consulta [aqui](https://tylermcginnis.com/angularjs-factory-vs-service-vs-provider-5f426cfe6b8c#.x7rc3l40m).

templates
----------

- Para introducir el uso de los [templates](https://lostechies.com/gabrielschenker/2013/12/28/angularjspart-6-templates/) se creo el html `index.html` el cual va a contener todo el código común a nuestro proyecto.
- Se hace uso de la etiqueta [ngInclude](https://docs.angularjs.org/api/ng/directive/ngInclude) para incluir un template estatico en este caso `menu.html`.
- Los html que se crearon con anterioridad `menu.html`, `dishdetail.html`, `contactus.html` se modificaron para que solo tengan el contenido ya que en index estan los header y los scripts necesarios.

ngroute-and-spa
---------------

- Se instalo el [angular route](https://docs.angularjs.org/api/ngRoute) para incluir un template dinamico con la etiqueta [ng-view](https://docs.angularjs.org/api/ngRoute/directive/ngView) el cual se encarga de revisar los `href` y incluir el html segun el `routeprovider` que se configuro en `app.js`.
- Se agrego a cada elemento del array `dishes` en `service.js` un identificador para cuando se haga click sobre la imagen de un plato en `menu.html` direccione a `dishdetail`.
- Se agrego al controlador `DishDetailController` el servicio de route llamado `$routeParams`, el cual permite tener acceso a los parametros de la ruta encontrada y asi ejecutar el punto anterior.
- SPA (single-page-application) es un patron o tecnica que consiste en cargar solo una pagina y que apartir de esta responda a las acciones del usuario sin recargarse. Esto es lo que hicimos con el template `ìndex.html`.

uirouter-and-spa
----------------

- Se instalo el [ui router](https://angular-ui.github.io/ui-router/) para hacer uso de multiples vistas y vistas anidadas.
- Es importante tener lo más modularizado posible nuestro codigo y por eso se creo una nueva carpeta llamada `views` donde se gudaran todos los html que ya hemos hecho y dos nuevos `header.html` y `footer.html` para separar ese codigo que existe en el `index.html`
- En el index vamos a utilizar [ui-view](https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views) donde se cargaran los diferentes html que componen la pagina (header-content-footer) segun la nueva configuración en `app.js` con el `stateProvider`.
- Esta configuración es mejor que usar el ngroute y por defecto es el que se utilizara.

assignment-3
------------

- Se crearon dos html nuevos para completar el menu; `home.html`, `aboutus.html` los cuales haran uso de un service y de un factory respectivamente.
- En `service.js` se crearon nuevos metodos: en el service `menuFactory` se obtienen las promociones y los platos, mientras que en el factory `corporateFactory` se obtienen los lideres.
- En `controller.js` se crearon los controladores para el home llamado `ÌndexController` y para aboutus llamado `AboutusController` los cuales inyectan el service y el factory para obtener la información.
- El archivo `app.js` se mejoro para utilizar las caracteristicas de `ui.router` para que el proyecto sea más legible y utilice el patron `SPA`.

****************

client-server
-------------

- Se instalo el modulo [json-server](https://github.com/typicode/json-server) globalmente, para simular de manera facil una `api rest` (CRUD a base de datos mediante url http).
- Se creo una carpeta llamada `json-server` la cual contiene un archivo llamado `db.json` en el cual cada llave principal de json puede representar una consulta a base de datos como por ejemplo `http://localhost:3000/dishes` donde dishes es una llave del array.
- Para conocer como hacer un petición http segun si se desea consultar, actualizar, eliminar o agregar pueden buscar [metodos http](https://otroespacioblog.wordpress.com/2013/05/22/conoce-un-poco-sobre-los-metodos-http-en-rest/).
- Como json-server tiene un servidor web estatico vamos a crear dentro una carpeta llamada `public`.
- Se modifico el `gulpfile` para que inicie por el index, en especifico el `usemin` y el `browserSync`.
- Ahora se puede correr el gulp con `gulp watch` para que genere la carpeta dist y una vez que lo haga copiamos el contenido de esta carpeta a la public de json-server, lo corremos con `json-server --watch db.json` estando parados en la carpeta json-server y podremos ver que nuestro proyecto sigue funcionando normalmente.

http-service
-------------

- El [http](https://docs.angularjs.org/api/ng/service/$http) de angular es un service que permite comunicarse con un servidor e interactuar con este. Recuerden que ya tenemos un servidor de prueba que configuramos anteriormente.
- En `service.js` vamos crear una [constante](https://docs.angularjs.org/api/auto/service/$provide#constant) que contenga la url de nuestro servidor `http://localhost:3000/` y en el menuFactory vamos a inyectar https para asi hacer una petición get y obtener los dishes.
- Se deben cambiar tambien la forma de obtener los dishes en los controladores ya que debe hacer uso de un callback ya que http devuelve una promesa como se explica en la documentación de http.
- Se debe cambiar cambiar la forma de acceder a un dish especifico ya que en el `db.json` el `_id` cambio a `id`.
- Como al hacer una petición al servidor este puede fallar se deben trabajar los errores en la petición a dish de cada controlador que lo use, donde si se presenta un error el html debe mostrar el error correspondiente, como se hice en el archivo `menu.html` agregando el `ng-if` para mostrar o no la información.

resource
---------

- [ngresource](https://docs.angularjs.org/api/ngResource) es un modulo con soporte `RESTFUL` con el cual haremos lo mismo que con http pero a alto nivel osea más sencillo y potente.
- Se incluye la llamada del mudulo en el `index.html` ya que es externo.
- se agrego el modulo a la aplicación en `app.js` y en el `service.js` se inyecto en los factoy el `resource` para asi actualizar los metodos que obtienen los datos del servidor.
- En los controladores se actualizo el metodo para obtener los dishes usando los metodos de [resource](https://docs.angularjs.org/api/ngResource/service/$resource) y se manejaron los errores con los `promises` que se indican en la [documentación](https://docs.angularjs.org/api/ng/service/$q).

testing
-------

- Primero se debe instalar el framework que contiene los metodos para hacer los test llamado [jasmine](http://jasmine.github.io/2.3/introduction.html) y esto lo podemos hacer con un modulo de [npm](https://www.npmjs.com/package/jasmine-core).
- Tambien vamos a instalar karma el cual se encarga de correr los test y como vamos a hacerlo desde consola debemos instalar la [linea de comandos](https://www.npmjs.com/package/karma-cli) y el [plugin](https://github.com/karma-runner/karma-jasmine) para que karma y jasmine funcionen juntos.
- Luego debemos poner en marcha los entornos para hacer las pruebas y soporter la falta de un navegador cuando por ejemplo estemos en un servidor, para esto debemos usar [phantomjs](http://phantomjs.org/headless-testing.html) y soportar el [navegador de karma](https://www.npmjs.com/package/karma-phantomjs-launcher) y el de [chrome](https://github.com/karma-runner/karma-chrome-launcher), aunque puede soportar muchos más.
- En resumen los test unitarios de `jasmine` son ejecutados por `karma` dentro del navegador `phantom`.
- Se debe instalar el modulo de angular [ngMock](https://docs.angularjs.org/api/ngMock) con el cual podemos inyectar comportamientos en los test segun sea necesario.
- Despues de todas esas instalaciones se debe crear una carpeta llamada `test` en la raiz del proyecto `conFusion` y alli configurar karma en el archivo `karma.conf.js`.
- Se creo la carpeta `unit` dentro de test y otra carpeta `controllers` dentro de unit, donde se crearon todos los diferentes test de cada funcionalidad para cada controlador.
- queda pendiente la explicación de los test e2e !.
