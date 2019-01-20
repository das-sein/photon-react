import React from 'react';
import { Button, Card, Grid, Typography } from 'photon-react';

import CheckIcon from 'photon-icons/icons/desktop/check-16.svg';
import DeleteIcon from 'photon-icons/icons/desktop/delete-16.svg';


const TodoList = ({ todos, toggleTodo, deleteTodo }, props) => (
    <div>
        <Grid.Row margin={16}>
            <Grid.Column className={'todo-list'} gap={16} margin={16}>
                {todos.map(t => (
                    <Card.Body
                        button
                        key={t.id}
                        onClick={() => toggleTodo(t.id)}
                        shadow={10}
                        className={t.completed ? 'todo-list__item--completed' : ''}
                        >
                        <Card.Content>
                            <Grid.Row>
                                <div className={'todo-list__icon-item'}>
                                    {t.completed && <CheckIcon />}
                                    <Typography.Title size={'lg'}>
                                        {t.content}
                                    </Typography.Title>
                                </div>
                            <Button.Ghost
                                onClick={() => deleteTodo(t.id)}
                            >
                                <DeleteIcon />
                            </Button.Ghost>
                            </Grid.Row>
                        </Card.Content>
                    </Card.Body>
                ))}
            </Grid.Column>
        </Grid.Row>
        <Grid.Row gap={16}>
            <Button.Default
                disabled={todos.length == 0}
                onClick={() =>
                    todos.map(
                        t => toggleTodo(t.id, false))}
            >
                Mark All Incomplete
            </Button.Default>
            <Button.Default
                status={'success'}
                disabled={todos.length == 0}
                onClick={() =>
                    todos.map(
                        t => toggleTodo(t.id, true))}
            >
                Mark All Complete
            </Button.Default>
        </Grid.Row>
    </div>
);

export default TodoList;
