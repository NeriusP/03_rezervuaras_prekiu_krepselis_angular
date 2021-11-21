export class Preke{
    public id: number;
    public pavadinimas: string;
    public kiekis: string;

    constructor(id: number, pavadinimas:string, kiekis:string){
        this.id = id;
        this.pavadinimas = pavadinimas;
        this.kiekis = kiekis;
    }
}