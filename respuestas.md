Punto 27
Usaría let cuando el valor de la variable puede cambiar con el tiempo, por ejemplo en un contador como let puntos = 0 que luego se actualiza a medida que avanza el juego.

Usaría const cuando el valor no va a cambiar después de ser asignado, por ejemplo const nombre = "Luna" o const jugador = { vida: 100 }, donde la variable no se reasigna aunque sí se puedan modificar sus propiedades internas.

Se recomienda evitar var porque no respeta el alcance de bloque y puede generar errores, por ejemplo en un for como for (var i = 0; i < 3; i++) {} donde la variable i sigue existiendo fuera del bloque, lo que puede provocar comportamientos inesperados en el código.