// cajadeTexto.textContent = 
//codigodeChat
//if (codigodeChat == ){
//    cajadeTexto.textContent = " " }

//no olvidar solo entra 
//187 Caracteres
//156 Caracteres (sin espacios)



function game (){ 
    if (codigodeChat == 1 ){
        $("#cajadeTexto").text ("me encanta que sigas las reglas de las teclas ( ͡❛ ͜ʖ͡❛ ) , no es nada en particuar solo no me gusta que me toquen y prefiero tener mi espacio para hablar ... entiende? espacio ʕ•́ᴥ•̀ʔ")
    }

    if (codigodeChat == 2 ){
        $("#cajadeTexto").text  (" me encanto mi chiste, pero no creo que este aqui por las risas. o si?  si la respusta es no entoces de todas formas puedes quedarte? no me gusta estar solo... ")
    }

    if (codigodeChat == 3 ){
        $("#cajadeTexto").text  (" genial ( ͡ᵔ ⏥ ͡ᵔ), ya esta todo listo para jugar, lo estas? tendras que vigilar mi  hambre, sed y quiero hablarte de ves en cuando. cada dia que pase perdere un punto de cada emocion ") 
    }

    if (codigodeChat == 4 ){
        $("#cajadeTexto").text  (" pero todos los dias a lo largo de 10 dias tendras puntos para hablarme, alimentarme o darme algo rico de beber me encantan los PUNTOS...    (っ ͡• ⏥ ͡•)っ🎔 ") 
    }


    if (codigodeChat == 5 ){
        $("#cajadeTexto").text  (" ESTOY TAN EMOCINADO QUE SIENTO QUE VOY A EXPLOTAR ( nota de parche : los de mercadotecnia dicen que alex ya no puede explotar, era peligroso) ") 
    }

    if (codigodeChat == 6 ){
        $("#cajadeTexto").text  ( "bueno bueno, ya me calme el juego esta listo !!! nice. alla vamos ... ") 
    }

    if (codigodeChat == 7 ){
        $("#cajadeTexto").text  (" iniciando..")
    }

    if (codigodeChat == 8 ){
        PrimerDia ()
    }
    if (codigodeChat == 9){
        PrimerDia(true)
    }
    if ( codigodeChat >= 999){
        $("#cajadeTexto").text  ("  alex ha perecido por falta de amor, por que no quiso cuidar de el ?  ")
        mathF ()
    }
    if (( codigodeChat >= 666) && (codigodeChat < 999) ) {
        alert (" puto el que lee")
        $("#cajadeTexto").text  ("gracias...")
    }

}
         

//( puntosAC != 0 )
// ( ( sed > 0 ) && ( comida > 0 ) && ( felicidad > 0 ) && ( hoy != 10) )
