const pet = {
    name: 'Milka',
    color: 'Cafe',
    raza: 'Dachshund',
    favoriteToys: [
        {name: 'pelota', color: 'rojo', estaRoto: true},
        {name: 'peluche', color: 'azul', estaRoto: true},
    ]
};

const bass = {
    brand: 'Yamaha',
    color: 'Blue',
    stringsNumber: 4,
    songsPlayed: [
        {name: 'Evil', artist: 'Interpol', learned: true},
        {name: 'Dream On', artist: 'Aerosmith', learned: false},
        {name: 'Crying Lightning', artist: 'Arctic Monkeys', learned: true},
    ]
};

const pc = {
    processor: {
        brand: 'AMD Ryzen',
        model: '2200G',
        launchDate: 2018
    },
    graphicsCard: {
        brand: 'Nvidia',
        model: 'GTX 1060',
        VRAM: 3, // GB
        launchDate: 2016 
    },
    caseColor: 'black',
    gamesPlayed: [
        {name: 'Counter-Strike 2', devs: 'Valve', isF2P: true},
        {name: 'Cyberpunk 2077', devs: 'CD Projekt Red', isF2P: false},
        {name: 'Metro 2033', devs: '4A Games', isF2P: false}
    ]
};

let toysN = pet.favoriteToys.length;

for (let i = 0; i < toysN; i++) {
    if (pet.favoriteToys[i].estaRoto)  {
        console.log('Compra un jueguete nuevo.');
    }
    else {
        console.log('No necesitas juguetes nuevos.');
    }
};

if (pc.graphicsCard.VRAM < 8) {
    console.log('Tu PC requiere mas memoria de video.');
} else if (pc.graphicsCard.brand == 'Nvidia') {
    console.log('Tu grafica fue hecha por una de las empresas mejor valoradas del mundo.');
};