import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';
import RefreshIcon from 'photon-icons/icons/desktop/refresh-16.svg';


export const buttonStories =
    storiesOf('Button', module)
        .add('button generic status', () => (
                <Button>
                    Generic Button
                </Button>
        ))
        .add('button generic status (onClick)', () => (
            <Button onClick={() => alert('Hello, Firefox!')}>
                Generic Button
            </Button>
        ))
        .add('button generic status (disabled)', () => (
            <Button disabled>
                Generic Button
            </Button>
        ))
        .add('button generic status (puffy)', () => (
            <Button size={'puffy'}>
                Generic Button
            </Button>
        ))
        .add('button generic status (micro)', () => (
            <Button size={'micro'}>
                Generic Button
            </Button>
        ))
        .add('button primary status', () => (
            <Button status={'primary'}>
                Primary Button
            </Button>
        ))
        .add('button error status', () => (
            <Button status={'error'}>
                Error Button
            </Button>
        ))
        .add('button success status', () => (
            <Button status={'success'}>
                Success Button
            </Button>
        ))
        .add('button warning status', () => (
            <Button status={'warning'}>
                Warning Button
            </Button>
        ))
        .add('ghost button', () => (
            <Button type={"ghost"}>
                <RefreshIcon />
            </Button>
        ));
