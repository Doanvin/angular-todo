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

export class Todo {
  completed: Boolean;

  _text: string;
  get text() {
		return this._text;
	}
	set text(value: string) {
		this._text = value.trim();
}

  constructor(text: string, completed: Boolean = false) {
    this.text = text;
    this.completed = completed || false;
  }
}
