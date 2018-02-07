export class List {
    public id: string;
    public todos: Todo[];

    constructor(public title: string, public tags, list: {id: string, title: string, tags: string[],
                                                          todos: [{text: string, completed: Boolean}]}) {
        this.id = list.id || Date.now().toString();
        this.title = title;
        this.tags = tags.trim().split(',');
        this.todos;
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

  constructor(text: string, completed: Boolean) {
    this.text = text;
    this.completed = completed || false;
  }

}
