export class List {
    id: string;
    todos: {}[];

    constructor(public title: string, public tags) {
        this.id = Date.now().toString();
        this.title = title;
        this.tags = tags.trim().split(',');
        this.todos = [];
    }
}
