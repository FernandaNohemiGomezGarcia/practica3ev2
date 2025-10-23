const botonBuscar = document.getElementById("botonBuscar");
const inputnombre = document.getElementById("nombre");
const id = document.getElementById("id");
const imagen = document.getElementById("imagen");
const sonido = document.getElementById("sonido");
const listaHabilidades = document.getElementById("listaHabilidades");
const shiny = document.getElementById("shiny");

async function buscarPokemon(){
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputnombre.value);
    const infoPokemon = await respuesta.json();

    //poner el id en el parerafo llamado id
    id.innerText = infoPokemon.id;

    //mostrar iumagen
    imagen.src = infoPokemon.sprites.other.home.front_default;
    shiny.src = infoPokemon.sprites.front_shiny || infoPokemon.sprites.front_default;

    //Mostrar audio
    sonido.src = infoPokemon.cries.latest;

    //Mostrar habiliades
    listaHabilidades.innerHTML = "";

    infoPokemon.abilities.forEach(a => {
        const item = document.createElement("li")
        item.innerText = a.ability.name;
        listaHabilidades.appendChild(item);
    });
};
botonBuscar.addEventListener("click", e => {
    e.preventDefault();
    buscarPokemon();

})