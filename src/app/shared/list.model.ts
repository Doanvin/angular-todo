export class List {
    public key: string;
    public title: string;
    public tags: Array<string>;
    public tasks: Array<string>;

    constructor(title: string, tags: string) {
        this.key = Date.now().toString();
        this.title = title;
        this.tags = tags.trim().split(',');
        this.tasks = [];
    }
}
