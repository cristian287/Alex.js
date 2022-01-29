const URLJSON = "json.json";
function RNG(maximo){
    //* CUALQUIER TIPO DE RNG
    let aleatoriedad = Math.round(Math.random()*maximo);
    return aleatoriedad;
}
$("body").prepend("<button id='boton'>JSON</button>");
$("#boton").click(() => {
    console.log("hola")
    $.getJSON(URLJSON, function (respuesta, estado){
        if (estado === "success"){
            let dato = RNG(2)
            $("#hola").text(respuesta[dato].Texto)
        }
    })
})