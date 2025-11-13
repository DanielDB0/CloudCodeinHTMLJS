let html

function text(arg, id= '', classe=''){
    html += `<p id="${id}" class="${classe}">${arg}</p>`
}

function initDiv(id = '', classe=''){
    html += `<div id="${id}", class="${classe}">`
}

function fimDiv(){
    html += `</div>`
}

function iniSection(id = ''){
    html += `<section id="${id}">`
}

function fimSection(){
    html += `</section>`
}

function init(lang = ''){
    html += `<html lang="${lang}">`
}

function end(){
    html += "</html>"
}

function initHead(title){
    html += `<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta><title>${title}</title>`
}

function fimHead(){
    html += '</head>'
}

function CSS(shortcut){
    html += `<link rel="stylesheet" href="${shortcut}"/>`
}

function JS(shortcut){
    html += `<script src="${shortcut}"></script>`
}

function initBody(){
    html += '<body>'
}

function fimBody(){
    html += '</body>'
}

function run(){
    document.querySelector('html').innerHTML = html
}

function image(path = '', alt ='', id = '', classe =''){
    html += `<img src="${path}" alt="${alt}" id="${id}" class="${classe}"/>`
}

function initNav(id = '', classe = ''){
    html += `<nav id="${id}" class="${classe}">`
}

function fimNav(){
    html += '</nav>'
}

function initUl(id = '', classe = ''){
    html += `<ul id="${id}" class="${classe}">`
}

function fimUl(){
    html += '</ul>'
}

function initLi(id = '', classe = ''){
    html += `<li id="${id}" class="${classe}">`
}

function fimli(){
    html += '</li>'
}

function Hiperlink(text = '', link = '', id = '', classe = ''){
    html += `<a href=${link} id="${id}" class="${classe}">${text}</a>`
}

function VideoLoop(path = '', id = '', classe = ''){
    html += `<video src="${path}" autoplay muted loop id="${id}" class="${classe}"></video>`
}


initHead('CloudCodeX')
CSS('style.css')
fimHead()
initBody()
    initDiv()
        initDiv("header")
            initDiv()
                image('img/Logotipo.png', 'CloudCodeX', 'Logotipo')
            fimDiv()
            initNav()
                initUl('navegacao')
                    initLi('', 'btnNav'); Hiperlink('Home', '#banner'); fimli()
                    initLi('', 'btnNav'); Hiperlink('Sobre Nós', '#sobre'); fimli()
                    initLi('', 'btnNav'); Hiperlink('Portifólio', '#portifolio'); fimli()
                    initLi('', 'btnNav'); Hiperlink('Contato', '#contato'); fimli()
                fimUl()
            fimNav()
        fimDiv()
        iniSection('banner')
            VideoLoop('video/video.mp4', 'TopoPagina')
            initDiv('welcome')
                text('Bem-Vindo À', '', 'welcome')
                text('CloudCodeX', '', 'welcome')
            fimDiv()
        fimSection()
        initDiv('container')
            iniSection('sobre')
                text('Sobre Nós', '', 'title1')
                text('Somos uma startup de tecnologia comprometida em impulsionar o crescimento e a evolução das empresas de nossos clientes. Nosso objetivo é oferecer soluções inovadoras que otimizam processos, aumentam a eficiência e agregam valor, sempre acompanhando as tendências do mercado e as necessidades do futuro.', '',
                    'pexplain')
            fimSection()
            iniSection('MVV'); fimSection()
            initDiv('MoreCards'); fimDiv()
            initDiv('MoreCards'); fimDiv()
            iniSection('portifolio')
                initDiv()
                    initDiv('cardPort')
                        initDiv('cardPortLeft')
                            initDiv('clients')
                                image('img/BallerFlixLogo.png', 'LogoTipo BallerFlix', '', 'imgClient')
                            fimDiv()
                            initDiv('dLanguages')
                                text('Linguagens Usadas', 'tLang')
                                initDiv('Languages'); fimDiv()
                            fimDiv()
                        fimDiv()
                        initDiv('cardPortRight')
                            initDiv('clientSite')
                                image('img/BallerFlixSite.png', 'Site Ballerflix', '', 'imgSiteClient')
                            fimDiv()
                        fimDiv()
                    fimDiv()
                fimDiv()
            fimSection()
            iniSection('equipe')
                
            fimSection()
        fimDiv()
    fimDiv()
fimBody()
end()
run()
script()


function script(){
    //Missão, Visão e Valores

let card = `
<div class="cards">
    <div class="dexplain1">
        <h2 class="title1">---</h2>
        <b class="pexplainCard defaultMarginText">
            ###
        </b>
        <p class="pexplainCard">
            +++
        </p>
    </div>
</div>
`
let cardTitles = ['Missão', 'Visão', 'Valores']
let cardContent = ['soluções tecnológicas de alto nível, capacitando empresas a prosperar por meio da qualidade e inovação digital.',
'reconhecimento global pela excelência, criando soluções transformando negócios e gerando valor.', 
'pela ética, colaboração, transparência, segurança, sustentabilidade e qualidade.']
let KeyWordsCard = ['Desenvolver', 'Ter', 'Inovação']

const MVV = document.querySelector("#MVV")

for(let i = 0; i < 3; i++){
    MVV.innerHTML += card.replace('---', cardTitles[i]).replace('+++', cardContent[i]).replace('###', KeyWordsCard[i])
}
/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Cards Extras

card = `
<div class="cards1">
    <div class="dexplain1">
        <h2 class="title3">---</h2>
        <p class="pexplainCard">
            +++
        </p>
    </div>
</div>
`
let ExtraCardTitles = [['Hospedagem e Manutenção', 'Desenvolvimento de sites', 'Aplicativos Móveis'],
['Outsourcing Team','Serviços de design UX-UI','Inception']]
let ExtraCardContent = [['Hospedagem segura e suporte técnico especializado.',
'Desenvolvimento Customizado e suporte pós lançamento', 
'Aplicativos personalizados, Design intuitivo, Para celulares e tablets e Multiplataforma para iOS e Android.'],
['Nossos profissionais experientes e alinhados às suas necessidades, nosso time externo se integra perfeitamente ao seu projeto',
'Experiências digitais intuitivas, funcionais e visualmente atraentes',
'Conectar os objetivos de negócio com as reais necessidades do usuário']]


const BothMoreCards = document.querySelectorAll("#MoreCards")


for(let i = 0; i < BothMoreCards.length; i++){
        for(let j = 0; j < ExtraCardTitles[i].length; j++){
        BothMoreCards[i].innerHTML += card.replace('---', ExtraCardTitles[i][j]).replace('+++', ExtraCardContent[i][j])
    }
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Equipe

const allPerfil = document.querySelectorAll('.divPerfil1')

let perfil = `
<div class="perfil">
<img src="img/Daniel.jpg" alt="---" class="imgPerfil">
</div>
<h3 class="nomeMembro">+++</h3>
`

const PersonsList = [
    ['Juliana', 'da Silva Oliveira'],
    ['Isaque', 'Sérgio da Silva'],
    ['Giovani', 'Amorim de Sousa'],
    ['Daniel', 'Dias Bueno'],
    ['Rafael', 'Henrique Oliveira Rocha']
]

for(let i = 0; i < 5; i++){
    allPerfil[i].innerHTML += perfil.replace('+++', `${PersonsList[i][0]} ${PersonsList[i][1]}`).replaceAll('---', PersonsList[i][0])
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Portifólio

let languages = ['html','css','js']
const Language = document.querySelector('#Languages')

for (let i = 0; i < languages.length; i++) {
    l = languages[i]
    Language.innerHTML += `<img src="img/${l}.png" alt="${l}" class="Language">`  
}


/*-------------------------------------------------------------------------------------------------------------------------------------------*/
//Contatos

let contatos = ['Av. Brig. Faria Lima, 8152 - Itaim Bibi','(11) 90955-4872','cloudcodex@gmail.com']
const TxtContato = document.querySelector('#TxtContato')

for (let i = 0; i < contatos.length; i++) {
    TxtContato.innerHTML += `<p class="pContato">${contatos[i]}</p>`
}

}