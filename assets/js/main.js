// Bienvenida
alert("¡Bienvenido al pueblo paleta! 📍");

// Definir Pokémon disponibles🕹️
const invalido = "Pikachu";
const fuego = "Charmander";
const planta = "Bulbasaur";
const agua = "Squirtle";

// Función para validar el nombre
function validarNombre(nombre) {
    const nombreValido = /^[A-Za-z]{3,}$/;
    return nombreValido.test(nombre);
}

// Función para preguntar si quiere volver a elegir Pokemón
function preguntarVolverAElegir() {
    let respuesta = prompt("¿Estás feliz con tu decisión? ✨ (sí/no) ").toLowerCase();
    return respuesta === "no" || respuesta === "n";
}

// Función para seleccionar Pokémon
function seleccionarPokemon() {
    let nombre = "";
    let nombreEsValido = false;

    while (!nombreEsValido) {
        nombre = prompt("Por favor ingresa tu nombre: \n(mínimo 3 caracteres y sin números)");
        if (validarNombre(nombre)) {
            nombreEsValido = true;
        } else {
            alert("Nombre inválido. Asegúrate de que tenga al menos 3 caracteres y no contenga números.");
        }
    }

    let pokemonElegido = "";
    let opcionValida = false;

    while (!opcionValida) {
        let eligePokemon = prompt("Hola " + nombre + ", elige el tipo de Pokémon que quieres: \n 1 - Para Tipo Fuego 🔥 \n 2 - Para Tipo Planta 🌱 \n 3 - Para Tipo Agua 💧");

        switch (eligePokemon) {
            case "1", "🔥":
                pokemonElegido = fuego + "🔥"; 
                opcionValida = true;
                break;
            case "2","🌱":
                pokemonElegido = planta + "🌱";
                opcionValida = true;
                break;
            case "3", "💧":
                pokemonElegido = agua + "💧";
                opcionValida = true;
                break;
            default:
                alert("Ups, Pokemón no disponible, solo nos queda " + invalido + "⚡\n¡Cuidado con su impactrueno!");
                pokemonElegido = invalido;
                alert("¡Te lo advertí! " + invalido + " acaba de usar impactrueno⚡");
                opcionValida = false; 
                break;
        }

        if (opcionValida) {
            alert("¡Genial " + nombre + "! Has elegido a " + pokemonElegido + ".");
            if (preguntarVolverAElegir()) {
                opcionValida = false; 
            }else{
                alert( "¡Gran desición " + nombre + ", " + pokemonElegido + " será un gran compañero de aventuras.");
            }
        }
    }
}


seleccionarPokemon();
