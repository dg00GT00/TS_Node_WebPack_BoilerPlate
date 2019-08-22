import {Collection} from "../models/Collection";

export abstract class CollectionView<T, K>{
    constructor(public parent: HTMLElement | null, public collection: Collection<T, K>) {}

    abstract renderItem(model: T, itemParent: HTMLElement): void

    render(): void {
        if (this.parent) {
            this.parent.innerHTML = '';
            const templateElement = document.createElement('template');
            for (const model of this.collection.models) {
                const itemParent = document.createElement('div');
                this.renderItem(model, itemParent);
                templateElement.content.append(itemParent);
            }
            this.parent.append(templateElement.content);
        }
    }
}
