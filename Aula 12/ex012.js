var agora = new Date()
var hora = agora.getHours()

if(hora > 24){    
    console.log('Digite um valor de hora válido')
    }else if(hora > 22 || hora < 5){
        console.log(`Agora são exatamente ${hora} horas.`)
        console.log('Boa Madrugada')
    }else if( hora < 12){
        console.log(`Agora são exatamente ${hora} horas.`)
        console.log('Bom Dia')
    }else if (hora <= 18){
        console.log(`Agora são exatamente ${hora} horas.`)
        console.log('Boa Tarde')
    }else{
        console.log(`Agora são exatamente ${hora} horas.`)
        console.log('Boa Noite ')
 }