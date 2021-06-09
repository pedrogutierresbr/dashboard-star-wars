const personagensContador = document.getElementById('personagens');
const especiesContador = document.getElementById('especies');
const planetasContador = document.getElementById('planetas');
const navesContador = document.getElementById('naves');

preencherContadores();

function preencherContadores(){
    Promise.all([swapiGet('people/'), 
                swapiGet('species/'),
                swapiGet('planets/'),
                swapiGet('starships/')
            ]).then(function (results) {
        personagensContador.innerHTML = results[0].data.count;
        especiesContador.innerHTML = results[1].data.count;
        planetasContador.innerHTML = results[2].data.count;
        navesContador.innerHTML = results[3].data.count;
    });
}

function swapiGet(param){
    return axios
    .get(`https://swapi.dev/api/${param}`);
}

