import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/Card';
import Button from '../src/Button';
import Grid from '../src/Grid';
import Input from '../src/Input';

/* Icons for display purposes */
import SearchIcon from 'photon-icons/icons/desktop/search-16.svg';
import WarningIcon from 'photon-icons/icons/desktop/warning-16.svg';


export const inputStories =
    storiesOf('Input', module)
        .add('text field with placeholder and label', () => (
            <Input.Text
                name={'some-input'}
                label={'A label for the input'}
                placeholder={'Some placeholder text...'}
                icon={<SearchIcon />}
            />
        ))
        .add('text field with placeholder and label (warning)', () => (
            <Input.Text
                name={'some-input'}
                label={'A label for the input'}
                placeholder={'Some placeholder text...'}
                icon={<WarningIcon />}
                status={'warning'}
            />
        ))
        .add('text field with placeholder and label (error)', () => (
            <Input.Text
                name={'some-input'}
                label={'A label for the input'}
                placeholder={'Some placeholder text...'}
                icon={<WarningIcon />}
                status={'error'}
            />
        ))
        .add('text field for password with placeholder and label', () => (
            <Input.Text
                password
                name={'some-input'}
                label={'Password'}
                placeholder={'Put your password here...'}
            />
        ))
        .add('example login form with Button, Grid, and Card', () => (
            <Card.Body auto size={'md'} shadow={10}>
                <Card.Content>
                    <form>
                        <Grid.Column gap={4}>
                            <Input.Text
                                name={'username'}
                                label={'Username'}
                                placeholder={'Username or email address'}
                            />
                            <Input.Text
                                password
                                name={'password'}
                                label={'Password'}
                                placeholder={'Password'}
                            />
                        </Grid.Column>
                        <Card.Actions>
                            <Button.Default
                                type={'submit'}
                                status={'primary'}
                                onClick={e => {
                                    e.preventDefault();
                                    alert('Hello, Firefox!');
                                }}
                            >
                                Login
                            </Button.Default>
                        </Card.Actions>
                    </form>
                </Card.Content>
            </Card.Body>
        ))
