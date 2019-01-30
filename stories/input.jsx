import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../src/Card';
import Button from '../src/Button';
import Grid from '../src/Grid';
import Input from '../src/Input';

/* Icons for display purposes */
import LoginIcon from 'photon-icons/icons/desktop/login-16.svg';
import MailIcon from 'photon-icons/icons/desktop/mail-16.svg';
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
                <Card.Content title={'Login'}>
                    <form>
                        <Grid.Column gap={8}>
                            <Input.Text
                                inner
                                name={'username'}
                                label={'Username'}
                                placeholder={'Username or email address'}
                                icon={<MailIcon />}
                            />
                            <Input.Text
                                inner
                                password
                                name={'password'}
                                label={'Password'}
                                placeholder={'Password'}
                                icon={<LoginIcon />}
                            />
                            <a href="#">Reset password</a>
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
        .add('radio button', () => (
            <Input.Radio name={'some-option'} label={'This is some radio option'} />
        ))
