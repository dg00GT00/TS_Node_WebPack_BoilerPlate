import {Model} from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    regions: { [key: string]: HTMLElement } = {};

    constructor(public parent: HTMLElement | null, public model: T) {
        this.bindModel();
    }

    abstract template(): string

    eventsMap(): { [key: string]: () => void } {
        return {}
    }

    regionsMap(): { [key: string]: string } {
        return {};
    }

    bindModel() {
        this.model.on('change', () => {
            this.render();
        })
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (const eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }
    }

    render(): void | never {
        if (this.parent) {
            this.parent.innerHTML = '';
            const templateElement = document.createElement('template');
            templateElement.innerHTML = this.template();
            this.bindEvents(templateElement.content);
            this.mapRegions(templateElement.content);
            this.parent.append(templateElement.content);
            this.onRender();
        } else {
            throw new Error('Root element not found');
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();
        for (const key in regionsMap) {
            const selector = regionsMap[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element as HTMLElement;
            }
        }
    }

    onRender(): void {

    }
}
