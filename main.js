// punto 1
console.log("Guía JavaScript iniciada");
const nombre = "Luna";
let edad = 18;
let vida = 100;
let puntaje = 0;
let estaActivo = true;

console.log(nombre, edad, vida, puntaje, estaActivo);

// punto 2
let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeTotal = puntosBase + bonus - penalizacion;
console.log("Puntaje total:", puntajeTotal);

// punto 3
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
 const valor = input.value;
// convertir a número
 const numero = Number(valor);  
// sumar 10
 const resultado = numero + 10;  
// mostrar en pantalla
 mensaje.textContent = resultado; 
});

// punto 4
if (edad > 13) {
    console.log("Puede jugar");
} else {
    console.log("No puede jugar todavía");
}

// punto 5
if (vida > 70) {
    console.log("Jugador en buen estado");
} else if (vida >= 30 && vida <= 70) {
    console.log("Jugador herido");
} else if (vida > 0 && vida < 30) {
    console.log("Jugador en peligro");
} else {
    console.log("Jugador muerto");
}
//opcional
if (vida < 0) {
    vida = 0;
}

// punto 6
let opcion = "iniciar";

switch (opcion) {
    case "iniciar":
        console.log("Iniciando juego...");
        break;
    case "configuracion":
        console.log("Abriendo configuración...");
        break;
    case "creditos":
        console.log("Mostrando créditos...");
        break;
    case "salir":
        console.log("Saliendo del juego...");
        break;
    default:
        console.log("Opción no válida");
}

// punto 7
for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("¡Comienza!");

// punto 8
let puntajetotal2 = 0;
for (let i = 1; i <= 5; i++) {
    puntajetotal2 += 10;
}
console.log(puntajetotal2);

// punto 9
const inventario = ["espada", "poción", "llave", "escudo", "mapa"];
// Primer objeto
console.log(inventario[0]);
// Último objeto
console.log(inventario[inventario.length - 1]);
// Cantidad total de objetos
console.log(inventario.length);

// punto 10
const inventario = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}

// punto 11
let mochila = [];
// Agregar objetos
mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");
// Quitar el último
mochila.pop();
// Mostrar resultado final
console.log(mochila);

// punto 12
const inventario = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}

// punto 13
function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");

// punto 14
function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// punto 15
const sumar = (a, b) =>{ a + b;
}
console.log(sumar(10, 5));

// punto 16
const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};
// Mostrar propiedades
console.log(jugador.nombre);
console.log(jugador.vida);
console.log(jugador.energia);
console.log(jugador.nivel);
console.log(jugador.inventario);

// punto 17
const jugador = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};
// Modificar propiedades
jugador.nivel += 1;
jugador.monedas += 50;
// Mostrar resultado
console.log(jugador);

// punto 18
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

for (let i = 0; i < personajes.length; i++) {
  let p = personajes[i];
  console.log(p.nombre + " es " + p.tipo + " y está en nivel " + p.nivel);
}

// punto 19
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

const personajesFuertes = personajes.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);

// punto 20
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);

// punto 21
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);

// punto 22
const personajes = [
  { nombre: "Luna", vida: 100, tipo: "maga", nivel: 3 },
  { nombre: "Kai", vida: 120, tipo: "guerrero", nivel: 4 },
  { nombre: "Nina", vida: 90, tipo: "arquera", nivel: 2 }
];

const vidaTotal = personajes.reduce((acumulador, personaje) => {
  return acumulador + personaje.vida;
}, 0);

console.log(vidaTotal);

// punto 23
const mensaje = document.getElementById("mensaje");

mensaje.textContent = "Bienvenido a la guía de JavaScript";
// Cambiar color del texto
mensaje.style.color = "blue";

//punto 24
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let puntos = 0;

boton.addEventListener("click", function () {
  puntos += 10;
  mensaje.textContent = "Puntos: " + puntos;
});

// punto 25
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const nombre = input.value.trim();

  if (nombre === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
  } else {
    mensaje.textContent = "Bienvenido/a, " + nombre;
  }
});

// punto 26
const jugador = {
  nombre: "Luna",
  puntaje: 1500
};
// Guardar en localStorage
localStorage.setItem("jugador", JSON.stringify(jugador));
// Recuperar desde localStorage
const jugadorGuardado = JSON.parse(localStorage.getItem("jugador"));
// Mostrar por consola
console.log(jugadorGuardado);
