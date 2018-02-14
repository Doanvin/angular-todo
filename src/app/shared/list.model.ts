export class List {
    id: string;
    todos: {text: string; completed: Boolean}[];

    constructor(public title: string, public tags: string[]) {
        this.id = Date.now().toString();
        this.title = title;
        this.tags = tags;
        this.todos = [];
    }
}
