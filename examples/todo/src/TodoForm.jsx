import React from 'react';

import { Button, Card, Grid, Input } from 'photon-react';


const TodoForm = ({ onSubmit, onChange }, props) => {
    return (
        <Grid.Row>
            <Card.Body shadow={30}>
                <Card.Content>
                    <form onSubmit={onSubmit}>
                        <Grid.Row margin={8}>
                            <Input.Text
                                required
                                label={'To-do Title'}
                                name={'todo-title'}
                                onChange={onChange}
                                placeholder={'Enter a todo item here...'}
                                status={props.status}
                                value={props.value}
                            />
                        </Grid.Row>
                        <Grid.Row>
                            <Button.Default
                                type={'submit'}
                                size={'puffy'}
                                status={'primary'}
                            >
                                Add To-do
                            </Button.Default>
                        </Grid.Row>
                    </form>
                </Card.Content>
            </Card.Body>
        </Grid.Row>
    );
};

export default TodoForm;
