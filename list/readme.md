## List app with Vue
Esta aplicación de lista incluye un formulario que permite añadir elementos a una lista que se muestra a continuación.

### Evitar recarga del formulario
Para evitar la recarga de la páginaal pulsar el botón _submit_  (`type="submit"`) del formulario hemos de modificar su comportamiento por defecto.
Para ello disponemos de distintas técnicas como podemos ver en la [documentación de Vue](https://vuejs.org/v2/guide/events.html#Event-Modifiers). La que he elegido es cambiar la acción para el evento `submit`:
```html
<form v-on:submit.prevent="addThing">
```
De este modo evitaremos que se vuelva a cargar la página con el evento `submit`. También podríamos omitir la ejecución del método `addThing`.
```html
<form v-on:submit.prevent>
```
En este caso tendriamos que incluirlo en el botón:
```html
<button class="btn btn-primary" type="submit" v-on:click="addThing">Add thing</button>
```