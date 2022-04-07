// variabili globabli prima parte
let container = document.querySelector('.team-container')
const team = [
    {
        img: 'wayne-barnett-founder-ceo',
        nome: 'Wayne Barnett',
        lavoro: 'Founder & CEO'
    },
    {
        img: 'angela-caroll-chief-editor',
        nome: 'Angela Caroll',
        lavoro: 'Chief editor'
    },
    {
        img: 'walter-gordon-office-manager',
        nome: 'Walter Gordon',
        lavoro: 'Office manager'
    },
    {
        img: 'angela-lopez-social-media-manager',
        nome: 'Angela-lopez',
        lavoro: 'Social media manager'
    },
    {
        img: 'scott-estrada-developer',
        nome: 'Scott Estrada',
        lavoro: 'Developer'
    },
    {
        img: 'barbara-ramos-graphic-designer',
        nome: 'Barbara Ramos',
        lavoro: 'Graphic Designer'
    }
]
// ciclo per la creazione delle card
for(let i=0; i<team.length; i++){
    let card = document.createElement('div')
    card.setAttribute('class', 'team-card')
    container.append(card)
    let image = document.createElement('div')
    image.setAttribute('class', 'card-image')
    image.innerHTML = `
        <img
        src="img/${team[i].img}.jpg"
        alt="${team[i].nome}"/>
    `
    card.append(image)
    let text = document.createElement('div')
    text.setAttribute('class', 'card-text')
    text.innerHTML = `
        <h3>${team[i].nome}</h3>
        <p>${team[i].lavoro}</p>
    `
    card.append(text)
}