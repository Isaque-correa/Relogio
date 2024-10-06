var agora = document.querySelector(".horario");
var img_agora = document.querySelector(".img_horario")
var hoje = new Date();
var hora_hoje = hoje.getHours();
console.log(img_agora)

if (hora_hoje < 12){
    agora.innerHTML= `<p>Agora são ${hora_hoje} Horas.</p>`
    img_agora.innerHTML = `<img src ="./img/dia.png">`
}else if (hora_hoje < 18){
    agora.innerHTML= `<p>Agora são ${hora_hoje} Horas.</p>`
    img_agora.innerHTML = `<img src="./img/tarde.png" alt="noite">`
}else{
    agora.innerHTML= `<p>Agora são ${hora_hoje} Horas.</p>`
    img_agora.innerHTML = `<img src ="./img/estradanortuna.png">`
}


