export class Attributes<T> {
    constructor(private data: T) {

    }
    get = <K extends keyof T>(key: K): T[K] | undefined => {
        return this.data[key];
    };

    set(update: T): void {
        for (const prop in update) {
            if ((update as Object).hasOwnProperty(prop)) {
                (this.data as T)[prop] = update[prop]
            }
        }
    }
    getAll(): T {
        return this.data;
    }
}

