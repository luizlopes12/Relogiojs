function relogio(){
    var data = new Date();
    var tela = document.querySelector('#rel')
    tela.innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}
setInterval(relogio, 1000)
