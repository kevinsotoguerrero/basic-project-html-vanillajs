# Información básica inicial

- Navigator: propiedades del navegador y el sistema operativo, con esto se puede acceder al disco duro del usuario por el local storage, gps, sistema operativo
- Window: maneja cada una de las ventanas
- Document: tiene cada unos de los elementos de la pagina web

DOM (document object model): arbol para interactuar con el document.

# Diferencias entre array y objeto

- El array tiene funciones propias que no puede usar un objeto (ej. push)
- Se diferencia con Array.isArray()

# NODE JS

Runtime, sw que corre js
node en la consola para entrar a node.js
ctrl+C para salir
npm install express -g //npm es el gestor de paquetes de node, express en una libreria para crear aplicaciones web y API, -g para instalar de forma global el framework o libreria, es mejor dejarlo solo para el proyecto

# Servidor con express

Al correr un servidor con express en el area local con la ip se puede acceder desde cualquier otro dispositivo, sino deja, revisar el firewall y los permisos de node

# Modelo cliente/servidor
## Metodos
Forma en la que se realiza la peticion

### GET
Enviar a través de la URL al servidor unas variables a procesar: www.ejemplo.com/archivo.php?varible=texto&varible=numero
### POST
Envia los datos por los headers http, un formulario
### AJAX
Cambio sin cambiar la URL, asynchronous

# Stacks

Conjunto de conocimientos
Ejemplo: LAMP (Linux, Apache, Mysql, PHP)

--------------------------

# Framework
Conjunto de librerias, reglas, herramientas para la construccion de un producto digital. Garantiza la calidad por una estructura de trabajo bien definida

# Libreria
Codigo escrito por otra persona que hace alguna funcionalidad por nosotros. Nos ayuda a resolver un problema especificoy tiene un proposito concreto

## Frameworks para CSS

- Bootstrap
- Foundation
- Tailwind

# API (Aplication program interface)
Parte del backend para comunicarse con el front 
Endpoint=Route=Path

## API SOAP
Pasa la informacion en XML

## API REST
Pasa la informacion en JSON

# The Cloud

## IaaS (Infrastructure)

Da la posibilidad tener el manejo de la CPU, RAM, SSD. Versiones de programas que se corren en el servidor (AWS, azure, digital ocean(la mas economica))
## PaaS (Platform)

Para hacer el deploy en el servidor sin preocuparse de CPU, RAM, SSD.
## SaaS (Software)

Solo el SW, casi nunca nada de codigo. (Google docs, Wordpress)
