import { Cat, ICat } from "./cat.entity";

export class CatsRepository {
    cats: Cat[] = [];

    private _index(id: number) {
        for (let i = 0; i < this.cats.length; i++) {
            if (this.cats[i].id === id) {
                return i;
            }
        }
        return -1;
    }

    getById(id: number): Cat {
        return this.cats[this._index(id)];
    }

    getAll(): Cat[] {
        return this.cats;
    }

    save(cat: Cat): Cat {
        this.cats.push(cat);
        return this.cats[this.cats.length - 1];
    }

    update(cat: Cat): Cat {
        const index = this._index(cat.id);
        if(index === -1){
            return null;
        }
        this.cats[index] = cat;
        return this.cats[index];
    }

    deleteById(id: number): Cat[] {
        const index = this._index(id);
        if(index === -1){
            return this.cats;
        }
        this.cats = this.cats.splice(index, 1);
        return this.cats;
    }
}

export const catsRepository = [
    {
        provide: 'CatsRepository',
        useFactory: () => {
            return new CatsRepository();
        }
    }
];