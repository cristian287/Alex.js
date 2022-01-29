function dialogo () {
    $ ("#cajadeTexto").slideUp ("fast")
    URLJSON= "json.json"
    $.getJSON(URLJSON, function (respuesta, estado){
        if (estado === "success"){
            let dato = (Math.round(Math.random()*25))
            $("#cajadeTexto").text(respuesta[dato].id)
        }
    })
    $ ("#cajadeTexto").slideDown ("fast")
}
// plantilla charla (old)
// if ( charlaReal == 000 ){
//     $("#cajadeTexto").text  ("  ")
// }

 // json plantilla 

 // {
//     "id":""        
// },