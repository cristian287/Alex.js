
function gameGeneral  (){
    do {
        cajadeTexto.textContent =  " buenos dias!! ✍(◔◡◔), este es el dia " + hoy + " mis estadisticas base son : " +  " felicidad: " + felicidad + " hambre: " +  comida + " sed: " + sed
    }while ( ( sed > 0 ) && ( comida > 0 ) && ( felicidad > 0 ) && ( hoy != 10) )
}
