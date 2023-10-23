const team = [
    {
        name: 'Wayne Barnett',
        role: 'founder & CEO',
        picture: ''
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


function printCol(cat) {
    const col = document.createElement('div');
    col.classList.add('col-4')
    const template = `
        <div class="card text-start">
          <img class="card-img-top" src="img/${cat.picture}" alt="Title">
          <div class="card-body">
            <h4 class="card-title">${cat.name}</h4>
            <p class="card-text">
                <ul>
                    <li>Breed: ${cat.breed}</li>
                    <li style= "background-color: ${cat.color}">Color: ${cat.color}</li>
                    <li>Age: ${cat.age}</li>
                    <li>Sex: ${cat.sex}</li>
                </ul>
            </p>
          </div>
        </div>
    `;
    col.innerHTML = template;
    rowEl.append(col);

}


const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const newCat = {
        name: document.getElementById('name').value,
        breed: document.getElementById('breed').value,
        color: document.getElementById('color').value,
        age: document.getElementById('age').value,
        sex: document.getElementById('sex').value,
        picture: document.getElementById('picture').value,
    }

    console.log(newCat);
    cats.push(newCat);
    printCol(newCat);
    reset();
});

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('breed').value = '';
    document.getElementById('color').value = '';
    document.getElementById('age').value = '';
    document.getElementById('sex').value = '';
    document.getElementById('picture').value = '';
}
