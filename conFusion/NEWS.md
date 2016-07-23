# Curso de Angular

##Ramas

introduction-to-angular
-----------------------

- Se instalo  <a href="https://nodejs.org/en/" target="_blank">nodejs</a>.
- Se instalo el manejador de paquetes web <a href="https://bower.io/" target="_blank">bower</a>
- Se creo el archivo <code>bower.json</code> en el cual se agregaron
  las dependencias iniciales para trabajar: Boostrap, font-awesome y
  Angular.
- Se creo la jerarquia de carpetas para iniciar el proyecto.
- Se creo el archivo <code>menu.html</code> donde se exploraron
  las directivas básicas de angular: <a href="https://docs.angularjs.org/api/ng/directive/ngApp" target="_blank">ng-app</a>, <a href="https://docs.angularjs.org/api/ng/directive/ngInit" target="_blank">ng-init</a>, <a href="https://docs.angularjs.org/api/ng/directive/ngModel" target="_blank">ng-model</a>, <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">ng-repeat</a>.
- Para visualizar el resultado debemos primero correr <code>bower install</code>
  y luego abrir en el navegador el archivo <code>menu.html</code>.


model-view-controller
---------------------

- Se creo un script en <code>menu.html</code> el cual definirá la aplicación
  de angular, y los controladores que definiran las funcionalidades.
- Se agrego en la etiqueta ng-app el nombre de la app y se agrego la etiqueta
  <a href="https://docs.angularjs.org/api/ng/directive/ngController" target="_blank">ngController</a> para acceder a la lógica que definimos en el script.
