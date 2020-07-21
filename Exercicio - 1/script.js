function carregar(){    
    var mgs = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    
    mgs.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //Bom Dia
        img.src = 'manha.png'
        document.body.style.background = '#dfe1de'
    }else if(hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#8d595b'
        
    }else{
        //Boa Noite
        img.src = 'noite.png'
        document.body.style.background = '#2d2d2d'
    }
}