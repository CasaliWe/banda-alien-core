//ABRIR MENU MOBILE
var controleMenuMobile = false

function abrirMenuMobile(e, param){
    if(!controleMenuMobile){
        e.innerHTML = '<i class="fas fa-times text-danger"></i>'
        controleMenuMobile = true
        document.getElementById("menu-mobile").style.cssText = 'height: 100vh;'
    }else{
        if(!param){e.innerHTML = '<i class="fas fa-bars"></i>'}else{document.querySelector(`.${param}`).innerHTML = '<i class="fas fa-bars"></i>'}
        controleMenuMobile = false
        document.getElementById("menu-mobile").style.cssText = 'height: 0vh;'
    }
}



//ABRIR MODAL APRESENTAÇÃO
function abrirApresentacao(integrante){

    if(integrante == 'jasan'){
           document.getElementById("img-apresentacao").src = '/img/site/jasan.jpg'
           document.getElementById('nome-apresentacao').innerHTML = 'Jasan Dysarz' 
           digitalizar('Jasan Dysarz é o guitarrista solo da banda Aliencore Rock. Ele teve seu primeiro contato com a guitarra aos 6 anos, começando com um violão Gianinni MPB 1992. Embora não tenha tido aulas naquela época, aos 15 anos, inspirado por lendas da guitarra como Slash, Jimmy Page e Eric Clapton, ele decidiu aprender a tocar guitarra de vez. Adquiriu sua primeira guitarra elétrica, uma Menphis by Tagima, e desde então tem desenvolvido suas habilidades como guitarrista solo na Aliencore Rock, incorporando suas influências musicais em seu estilo de tocar.');
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }else if(integrante == 'weslei'){
           document.getElementById("img-apresentacao").src = '/img/site/weslei.jpeg'
           document.getElementById('nome-apresentacao').innerHTML = 'Weslei Casali'
           digitalizar("Weslei Casali, com 25 anos de idade, possui uma sólida trajetória de 11 anos como baterista. Desde 2015, ele tem participado ativamente do cenário musical de Passo Fundo, tocando em diversas bandas e explorando uma ampla gama de estilos musicais, que vão desde o rock internacional até o rock nacional. Suas influências incluem bandas como Slipknot, Avenged Sevenfold, Bullet for My Valentine e Linkin Park. Além disso, Weslei é o fundador da banda Alien Core, onde continua a deixar sua marca na cena musical local.");
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }else if(integrante == 'gui'){
           document.getElementById("img-apresentacao").src = '/img/site/gui.jpg'
           document.getElementById('nome-apresentacao').innerHTML = 'Gui Zordan'
           digitalizar("Guilherme Zordan é um profissional que atua na área de engenharia de áudio. Ele tem experiência em trabalhar com instrumentos de corda e vocalização. Guilherme é conhecido por sua competência técnica e compreensão dos aspectos acústicos e eletrônicos da produção musical. Ele se destaca pela forma como incorpora sua paixão por instrumentos de corda e vocalização em seu trabalho.");
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }else if(integrante == 'wilson'){
           document.getElementById("img-apresentacao").src = '/img/site/wilson.jpg'
           document.getElementById('nome-apresentacao').innerHTML = 'Danny Fernandes'
           digitalizar("Wilson, mais conhecido como Danny Fernandes, foi inspirado a entrar no mundo da música ao ouvir a banda Linkin Park, popular nas rádios brasileiras nos anos 2000. Inicialmente, ele se identificou com o estilo emocore. Ao longo de sua jornada musical, ele estudou e tocou vários instrumentos, incluindo guitarra, teclado e bateria, além de ter feito um curso vocal na igreja quando era jovem. Atualmente, está se dedicando ao contrabaixo, explorando novos horizontes em sua carreira musical.");
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }


    function digitalizar(descricao){

        document.getElementById("descri-apresentacao").innerHTML = ''
        document.querySelector("._btn-alien").classList.add("d-none")

        var letras = descricao.split('')
        letras.forEach((letra, i)=>{
            setTimeout(() => {
                document.getElementById("descri-apresentacao").innerHTML += letra

                if(i == letras.length - 1){
                    document.querySelector("._btn-alien").classList.remove("d-none")
                }
            }, 10 * i);
        })

    }

}


//FECHAR MODAL APRESENTAÇÃO
function fecharApresentacao(){
      document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 0; width: 0%;'
}



//MÁSCARA TEL FORM PRINCIPAL
document.getElementById('tel-form').addEventListener('keyup', (e)=>{
    let input = e.target
    input.value = phoneMask(input.value)
})


const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}




//ANIMAÇÃO DE DIGITAÇÃO
var titleAnima = document.querySelector('.anima-digitar')
var backTexto = document.querySelector('.anima-digitar').textContent

function startAnimaDigitar(){

     var texto = titleAnima.textContent

     var loopRemove = setInterval(() => {

        if(texto.length == 1){
             clearInterval(loopRemove)
             segundoAnimaDigitar();
        }
         
        texto = titleAnima.textContent.slice(0, -1)
        titleAnima.textContent = texto
        
     }, 100);

}startAnimaDigitar();

function segundoAnimaDigitar(){

    var arrayLetras = backTexto.split('')
    
    arrayLetras.forEach((letra, i)=>{
          setTimeout(() => {
            titleAnima.textContent += letra
            if(i == arrayLetras.length -1){
                 setTimeout(() => {
                    startAnimaDigitar();
                 }, 2000);
            }
          }, 100 * i);
    })
 
}




//HOVER EM CIMA DA CAPA SINGLE PARA MOSTRAR ICONS STRAMS
function mostrarIconsStream(){
    document.getElementById("container-icons-stream").style.cssText = 'opacity: 1;'
    document.getElementById("alien-face").style.cssText = 'left: 57%;'
}

function esconderIconsStream(){
    document.getElementById("container-icons-stream").style.cssText = 'opacity: 0;'
    document.getElementById("alien-face").style.cssText = 'left: 45%;'
}