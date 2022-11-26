// VARIABLES
// una variable es un contenedor de informacion

let Evento  
            {
            Evento = "Mundial de futbol"
            pais_organizador = "Qatar";
            continente_organizador = "Asia";
            año = "2022";
            participantes = "32 selecciones"
            Cantidad_de_grupos = "8"
}

let pais_organizador_y_continente_organizador = pais_organizador + " " + continente_organizador;

let Nuestra_seleccion
                    {
                    pais = "Argentina";
                    continente = "Latinoamerica";
                    grupo = "C"
                }

console.log(pais_organizador, continente_organizador, año, participantes, cantidad_de_grupos);
alert(Evento, pais_organizador);
