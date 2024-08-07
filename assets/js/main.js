const charmander = {
    nombre: "Charmander",
    tipo: "Fuego",
    emoji: "🔥",
    efectivoContra: ["Acero", "Insecto", "Hielo", "Hierba"],
    debilContra: ["Roca", "Agua", "Tierra"]
};

const bulbasaur = {
    nombre: "Bulbasaur",
    tipo: "Hierba",
    emoji: "🌱",
    efectivoContra: ["Agua", "Tierra", "Roca"],
    debilContra: ["Fuego", "Hielo", "Veneno", "Volador", "Insecto"]
};

const squirtle = {
    nombre: "Squirtle",
    tipo: "Agua",
    emoji: "💧",
    efectivoContra: ["Fuego", "Tierra", "Roca"],
    debilContra: ["Eléctrico", "Hierba"]
};

const pikachu = {
    nombre: "Pikachu",
    tipo: "Eléctrico",
    emoji: "⚡",
    efectivoContra: ["Agua", "Volador"],
    debilContra: ["Tierra"]
};

const pokemons = [charmander, bulbasaur, squirtle, pikachu];

function elegirPokemonAleatorio() {
    const pokemonRandom = Math.floor(Math.random() * pokemons.length);
    return pokemons[pokemonRandom];
}

function mostrarPokemons() {
    return "¡La batalla está por iniciar! \nElige un Pokémon:\n1. Charmander 🔥\n2. Bulbasaur 🌱\n3. Squirtle 💧\n4. Pikachu ⚡";
}

function eligePokemon(eleccion) {
    switch (eleccion) {
        case "1":
        case "🔥":
            return charmander;
        case "2":
        case "🌱":
            return bulbasaur;
        case "3":
        case "💧":
            return squirtle;
        case "4":
        case "⚡":
            return pikachu;
        default:
            return null;
    }
}

function mostrarAtaqueDebilidad(pokemon) {
    return `${pokemon.nombre} (${pokemon.emoji})\n ✅ Efectivo contra: ${pokemon.efectivoContra.join(", ")}\n ❌ Débil contra: ${pokemon.debilContra.join(", ")}`;
}

function mostrarResultado(pokemonUsuario, pokemonContrincante) {
    let resultado;

    if (pokemonUsuario.efectivoContra.includes(pokemonContrincante.tipo)) {
        resultado = `¡${pokemonUsuario.nombre} (${pokemonUsuario.emoji}) gana contra ${pokemonContrincante.nombre} (${pokemonContrincante.emoji})!`;
    } else if (pokemonUsuario.debilContra.includes(pokemonContrincante.tipo)) {
        resultado = `¡${pokemonUsuario.nombre} (${pokemonUsuario.emoji}) pierde contra ${pokemonContrincante.nombre} (${pokemonContrincante.emoji})!`;
    } else {
        resultado = `¡Es un empate entre ${pokemonUsuario.nombre} (${pokemonUsuario.emoji}) y ${pokemonContrincante.nombre} (${pokemonContrincante.emoji})!`;
    }

    let mensajeFinal;
    if (pokemonUsuario.efectivoContra.includes(pokemonContrincante.tipo)) {
        mensajeFinal = `¡Felicidades! Tu Pokémon ${pokemonUsuario.nombre} (${pokemonUsuario.emoji}) ha ganado la batalla 🏆`;
    } else if (pokemonUsuario.debilContra.includes(pokemonContrincante.tipo)) {
        mensajeFinal = `Lo siento, tu Pokémon ${pokemonUsuario.nombre} (${pokemonUsuario.emoji}) ha perdido la batalla 😞`;
    } else {
        mensajeFinal = `¡Empate! Ninguno de los Pokémon ganó esta batalla`;
    }

    return `${resultado}\n${mensajeFinal}`;
}

function buscarPokemonPorNombre(nombre) {
    return pokemons.find(pokemon => pokemon.nombre.toLowerCase() === nombre.toLowerCase());
}

function filtrarPokemonsEfectivosContra(tipo) {
    return pokemons.filter(pokemon => pokemon.efectivoContra.includes(tipo));
}

function jugar() {
    let mensaje = mostrarPokemons();
    let eleccion = prompt(mensaje);

    const pokemonUsuario = eligePokemon(eleccion);
    if (!pokemonUsuario) {
        alert("Pokémon no encontrado. Intenta de nuevo.");
        return false;
    }

    alert(mostrarAtaqueDebilidad(pokemonUsuario));

    const pokemonContrincante = elegirPokemonAleatorio();
    alert(`La computadora ha elegido a ${pokemonContrincante.nombre} (${pokemonContrincante.emoji}).`);

    const resultado = mostrarResultado(pokemonUsuario, pokemonContrincante);
    alert(resultado);

    let opcion = prompt("¿Quieres jugar otra vez?\n1. Sí, eligiendo otro Pokémon 🎮\n2. No, salir ❌");

    switch (opcion) {
        case "1":
            return false;
        case "2":
            return null;
        default:
            alert("Ups, opción no válida. Vuelve a iniciar una partida.");
            return null;
    }
}

function inciarJuego() {
    let continuar = true;

    while (continuar) {
        continuar = jugar();
    }

    alert("¡Gracias por jugar! 👾");
}

inciarJuego();
22