import {ISortable} from "./Sorter";
import {Sorter} from "./Sorter";


export class CharactersCollection extends Sorter implements ISortable {
    constructor(public data: string) {
        super()
    }

    get length(): number {
        return this.data.length
    }

    compare(lefIndex: number, rightIndex: number): boolean {
        return this.data[lefIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex: number, rightIndex: number): void {
        const char = this.data.split('');
        [char[leftIndex], char[rightIndex]] = [char[rightIndex], char[leftIndex]];
        this.data = char.join('');
    }
}
