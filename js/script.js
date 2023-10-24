//variante utilizzando una classe Membro che abbia le stesse proprieta' degli oggetti usati precedentemente

class Member{
    constructor(nome, ruolo, picture){
        this.name = nome;
        this.role = ruolo;
        this.picture = picture;
    }
}

const team = [
    new Member('Wayne Barnett', 'founder & CEO', '../img/wayne-barnett-founder-ceo.jpg'), 
    new Member('Angela Caroll', 'Chief Editor', '../img/angela-caroll-chief-editor.jpg'),
    new Member('Walter Gordon', 'Office manager', '../img/walter-gordon-office-manager.jpg'),
    new Member('Angela Lopez','Social Media manager','../img/angela-lopez-social-media-manager.jpg'),
    new Member('Scott Estrada','Developer','../img/scott-estrada-developer.jpg'),
    new Member('Barbara Ramos','Graphic Designer','../img/barbara-ramos-graphic-designer.jpg')
]

/*
const team = [
    {
        name: 'Wayne Barnett',
        role: 'founder & CEO',
        picture: '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: '../img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office manager',
        picture: '../img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media manager',
        picture: '../img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: '../img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: '../img/barbara-ramos-graphic-designer.jpg'
    }
];
*/

const rowEl = document.querySelector('.row');
console.log(rowEl);



for (let i = 0; i < team.length; i++) {
    printCol(team[i]);
}


function printCol(member) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
        <div class="card text-start m-2">
          <img class="card-img-top" src="img/${member.picture}" alt="Title">
          <div class="card-body">
            <h4 class="card-title">${member.name}</h4>
            <p class="card-text">
               ${member.role}
            </p>
          </div>
        </div>
    `;
    col.innerHTML = template;
    rowEl.append(col);

}

const btn = document.querySelector('button');
btn.addEventListener('click', function () {

    //variante usando la classe Member
    const newMember = new Member(document.getElementById('name').value, document.getElementById('role').value, document.getElementById('picture').value);

    /*
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        picture: document.getElementById('picture').value
    }
    */

    console.log(newMember);
    team.push(newMember);
    printCol(newMember);
    reset();
});

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('picture').value = '';
}
