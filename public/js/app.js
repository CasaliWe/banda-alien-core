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
           digitalizar("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic");
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }else if(integrante == 'weslei'){
           document.getElementById("img-apresentacao").src = '/img/site/weslei.jpeg'
           document.getElementById('nome-apresentacao').innerHTML = 'Weslei Casali'
           digitalizar("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic");
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }else if(integrante == 'gui'){
           document.getElementById("img-apresentacao").src = '/img/site/gui.jpg'
           document.getElementById('nome-apresentacao').innerHTML = 'Gui Zordan'
           digitalizar("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic");
           document.getElementById("apresentacao-integrantes").style.cssText = 'opacity: 1; width: 100%;'
    }else if(integrante == 'wilson'){
           document.getElementById("img-apresentacao").src = '/img/site/wilson.jpg'
           document.getElementById('nome-apresentacao').innerHTML = 'Danny Fernandes'
           digitalizar("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic");
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