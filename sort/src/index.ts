import {LinkedList} from "./LinkedList";

import {NumbersCollections} from "./NumbersCollections";
import {CharactersCollection} from "./CharactersCollection";

const numbersCollections = new NumbersCollections([10, 3, -5, 0]);
numbersCollections.sort();
console.log(numbersCollections.data);

const charCollection = new CharactersCollection('Gledson');
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(4);
linkedList.add(-10);
linkedList.add(-3);

linkedList.sort();
linkedList.print();
