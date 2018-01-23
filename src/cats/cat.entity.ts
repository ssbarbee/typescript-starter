export class Cat implements ICat {
    static ID: number = 1;

    id: number;

    name: string;

    age: number;

    breed: string;

    constructor() {
        this.id = Cat.ID;
        Cat.ID++;
    }
}

export interface ICat {
    id: number;
    name:string;
    age:number;
    breed:string;
}
