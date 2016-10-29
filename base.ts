export interface ListI<T> {
    name: string;
    items: Array<T>;
	toString(): string;
}

export interface CardI {
    title: string;
    description: string;
    tags: Array<Tag>;
}

export interface TextCardI<T> {
    elements: Array<T>
}

export class Board implements ListI<Column> {
    constructor(
        public name: string,
		public items: Array<Column>
    ) {}

    toString() {
        let lists = '';
        this.items.forEach((item) => {
			lists += item.toString();
        });
        return `(${this.name})[Lists:${lists}]`;
    }
}

export class Column implements ListI<CardI> {
    constructor(
        public name: string,
        public items: Array<CardI>
    ) {}

    toString() {
        let cards = '';
        this.items.forEach((item) => {
			cards += item.toString();
        });
        return `(${this.name})[Cards:${cards}]`;
    }
}

export class TextCard implements CardI, TextCardI<TextElement> {
    constructor(
        public title: string,
        public description: string,
        public tags: Array<Tag>,
        public elements: Array<TextElement>
    ) {}

    toString() {
        let tags = '';
        let elements = '';
        this.tags.forEach((item) => {
			tags += item.toString();
        });
        this.elements.forEach((item) => {
			elements += item.toString();
        });
        return `[Card: ${this.title}, [Tags:${tags}], [Elements:${elements}]]`;
    }
}

export class TextElement {
    constructor(
        public name: string
    ) {}

    toString() {
        return `[Element: ${this.name}]`;
    }
}

export class Tag {
    constructor(
        public name: string
    ) {}

    toString() {
        return `[Tag: ${this.name}]`;
    }
}

