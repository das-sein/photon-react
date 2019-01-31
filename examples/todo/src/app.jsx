import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Grid, Input, Typography } from 'photon-react';


class Todo {
    constructor(id = 0, content) {
        this.id = id;
        this.content = content;
        this.completed = false;
    }
}

const addTodo = (state, todo) => [todo, ...state];

const getTodo = (state, id) => state.filter(s => s instanceof Todo && s.id === id);

const getTodos = (state) => state.filter(s => s instanceof Todo);

const TodoForm = props => (
    <Grid.Row>
        <Card.Body shadow={30}>
            <Card.Content>
                <form onSubmit={props.onSubmit}>
                    <Grid.Row margin={8}>
                        <Input.Text
                            required
                            onChange={props.onChange}
                            placeholder={'Enter a todo item here...'}
                            value={props.value}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        <Button.Default
                            status={props.status}
                            type={'submit'}
                            size={'puffy'}
                        >
                            Add To-do
                        </Button.Default>
                    </Grid.Row>
                </form>
            </Card.Content>
        </Card.Body>
    </Grid.Row>
);

class TodoFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'primary',
            nextId: 0
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            formContent: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.formContent.length > 0) {
            let todo = new Todo(
                this.state.nextId,
                this.state.formContent
            );
            let newTodos = addTodo(this.props.todos, todo);
            this.props.updateTodos(newTodos);
        }
    }

    render() {
        return (
            <TodoForm
                status={this.state.status}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />
        );
    }
}

const TodoList = props => (
    <div class={'todo-list'}>
        <Grid.Row margin={16}>
            <Grid.Column gap={16} margin={16}>
                {props.todos.map(t => (
                    <Card.Body
                        button
                        key={t.id}
                        onClick={() => props.updateTodo(t.id)}
                        shadow={10}
                        >
                        <Card.Content title={t.content}>
                            <Card.Actions>
                                <Button.Default
                                    size={'micro'}
                                    onClick={() => props.markDone(t.id)}
                                >
                                    Delete this
                                </Button.Default>
                            </Card.Actions>
                        </Card.Content>
                    </Card.Body>
                ))}
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Button.Default
                disabled={props.todos.length == 0}
                onClick={props.markAllUndone}
            >
                Mark All Incomplete
            </Button.Default>
            <Button.Default
                status={'success'}
                disabled={props.todos.length == 0}
                onClick={props.markAllDone}
            >
                Mark All Complete
            </Button.Default>
        </Grid.Row>
    </div>
);

class TodoListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.markAllUndone = this.markAllUndone.bind(this);
        this.markAllDone = this.markAllDone.bind(this);
        this.markDone = this.markDone.bind(this);
    }

    markDone(id) {
        let todos = this.props.todos.map(t => {
            if (t.id == id) {
                t.completed = true;
                return t;
            }
        })
    }

    markAllDone(e) {
        let todos = this.props.todos.map(t => {
            t.completed = true;
            return t;
        })
        this.props.updateTodos(todos);
    }

    markAllUndone(e) {
        let todos = this.props.todos.map(t => {
            t.completed = false;
            return t;
        });
        this.props.updateTodos(todos);
    }

    render() {
        return (
            <TodoList
                todos={this.props.todos}
                markAllDone={this.markAllDone}
                markAllUndone={this.markAllUndone}
            />
        );
    }
}


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                new Todo(0, 'This is an example to-do'),
                new Todo(1, 'Fix all the bugs that exist'),
                new Todo(2, 'Tweet more to get notice of senpais')
            ]
        };
        this.updateTodos = this.updateTodos.bind(this);
    }

    updateTodos(todos) {
        this.setState({ todos: todos });
    }

    render() {
        return (
            <div className={'todo-column'}>
                <Grid.Column gap={32}>
                    <Typography.Display size={'md'}>
                        Photon-React To-do List
                    </Typography.Display>
                    <TodoFormContainer
                        todos={this.state.todos}
                        updateTodos={this.updateTodos}
                    />
                    <TodoListContainer
                        todos={this.state.todos}
                        updateTodos={this.updateTodos}
                    />
                </Grid.Column>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
