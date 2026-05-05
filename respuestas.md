Punto 27
¿Cuándo usarías let?
Usaría let cuando el valor de la variable puede cambiar con el tiempo, por ejemplo en un contador como let puntos = 0 que luego se actualiza a medida que avanza el juego.

¿Cuándo usarías const?
Usaría const cuando el valor no va a cambiar después de ser asignado, por ejemplo const nombre = "Luna" o const jugador = { vida: 100 }, donde la variable no se reasigna aunque sí se puedan modificar sus propiedades internas.

¿Por qué actualmente se recomienda evitar var?
Se recomienda evitar var porque no respeta el alcance de bloque y puede generar errores, por ejemplo en un for como for (var i = 0; i < 3; i++) {} donde la variable i sigue existiendo fuera del bloque, lo que puede provocar comportamientos inesperados en el código.

Punto 28
¿Qué significa que una variable tenga “scope” o alcance?
El scope es el alcance de una variable, es decir, en qué partes del código puede ser utilizada; por ejemplo, una variable declarada dentro de una función como let nombre = "Local" solo existe dentro de esa función, mientras que una variable global como let nombre = "Global" se puede usar fuera de ella.

¿Qué se muestra primero?
Primero se muestra "Local", ya que al ejecutar mostrarNombre() se imprime la variable definida dentro de la función como let nombre = "Local".

¿Qué se muestra después?
Después se muestra "Global", porque el console.log(nombre) que está fuera de la función usa la variable global definida como let nombre = "Global".

¿Por qué?
Porque cada variable tiene un alcance distinto, y cuando hay dos variables con el mismo nombre, como let nombre = "Local" dentro de la función y let nombre = "Global" fuera, JavaScript utiliza la variable más cercana en ese contexto, por lo que dentro de la función usa la local y fuera usa la global.

Punto 29
¿Cuándo conviene usar un array y cuándo conviene usar un objeto?
Conviene usar un array cuando queremos guardar una lista de elementos similares, por ejemplo const inventario = ["espada", "poción", "llave"], donde cada elemento es un objeto del jugador y el orden puede ser importante.

En cambio, conviene usar un objeto cuando queremos representar una entidad con varias características, por ejemplo const jugador = { nombre: "Luna", vida: 100, nivel: 3 }, donde cada propiedad describe un aspecto específico del jugador.

¿Qué representa cada estructura?
El array inventario representa una colección de objetos que el jugador posee, mientras que el objeto jugador representa al personaje en sí, con sus atributos como nombre, vida y nivel.

Punto30
¿Qué es un evento en JavaScript?
Un evento es una acción que ocurre en la página y que JavaScript puede detectar y responder, por ejemplo cuando el usuario hace clic en un botón o escribe en un input.

¿Qué elemento escucha el evento?
El elemento que escucha el evento es boton, ya que se le aplica boton.addEventListener(...).

¿Qué acción se ejecuta?
Se ejecuta una función que muestra el mensaje "El usuario hizo clic" en la consola mediante console.log("El usuario hizo clic").

¿Dónde podríamos aplicar esto en una página web o videojuego?
Podríamos aplicarlo, por ejemplo, en un botón de “iniciar juego” donde al hacer clic se ejecute una acción como comenzar la partida, o en un botón de compra donde al presionarlo se agregue un objeto al inventario del jugador.