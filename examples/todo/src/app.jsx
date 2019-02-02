import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Grid, Input, Typography } from 'photon-react';
import TodoForm from './TodoForm.jsx';
import TodoList from './TodoList.jsx';


class Todo {
    constructor(id = 0, content) {
        this.id = id;
        this.content = content;
        this.completed = false;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                new Todo(0, 'An example to-do'),
                new Todo(1, 'Bug more senpais on Twitter'),
                new Todo(2, 'Find and fix all of the bugs')
            ],
            formValue: null
        };
    }

    nextId() {
        return Math.max(...this.state.todos.map(t => t.id)) + 1;
    }

    render() {
        return (
            <div className={'todo-column'}>
                <Grid.Column gap={32}>
                    <Typography.Display size={'md'}>
                        Photon-React To-do List
                    </Typography.Display>
                    <TodoForm
                        onChange={e => {
                            this.setState({ formValue: e.target.value });
                        }}
                        onSubmit={e => {
                            e.preventDefault();
                            this.setState({
                                todos: [
                                    new Todo(this.nextId(), this.state.formValue),
                                    ...this.state.todos
                                ]
                            });
                        }}
                    />
                    <TodoList
                        todos={this.state.todos}
                        toggleTodo={(id, state = null) => {
                            let newTodos = this.state.todos.map(t => {
                                if (state === true || state === false) {
                                    t.completed = state;
                                } else {
                                    if (t.id === id) {
                                        t.completed = !t.completed;
                                    }
                                }
                                return t;
                            });
                            this.forceUpdate();
                        }}
                        deleteTodo={id => {
                            let newTodos = this.state.todos.filter(t => t.id !== id);
                            this.setState({ todos: newTodos });
                        }}
                    />
                </Grid.Column>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
