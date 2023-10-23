const team = [
    {
        name: 'Wayne Barnett',
        role: 'founder & CEO',
        picture: '../img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture: ''
    },
    {
        name: 'Walter Gordon',
        role: 'Office manager',
        picture: ''
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media manager',
        picture: ''
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture: ''
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        picture: ''
    }
];

const rowEl = document.querySelector('.row');
console.log(rowEl);



for (let i = 0; i < team.length; i++) {
    printCol(team[i]);
}


function printCol(member) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
        <div class="card text-start">
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
    const newMember = {
        name: document.getElementById('name').value,
        role: document.getElementById('role').value,
        picture: document.getElementById('picture').value
    }

    console.log(newMember);
    cats.push(newMember);
    printCol(newMember);
    reset();
});

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('role').value = '';
    document.getElementById('picture').value = '';
}
