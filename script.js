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
