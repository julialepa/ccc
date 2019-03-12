

class Isosciele {
    constructor (base, altezza) {
        this.base = base;
        this.altezza = altezza;
    }

    area(){
        return (this.base * this.altezza) / 2;
    }
};

let isos = new Isosciele(3, 6);
console.log(isos.area());

class Rettangolo extends Isosciele {
    constructor (edge) {
        super (edge, edge);
    }
};

let rett = new Rettangolo (20);
console.log(rett.area())


//base altezza lati 