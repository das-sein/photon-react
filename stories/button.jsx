import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';


export const buttonStories =
    storiesOf('Button', module)
        .add('button generic status', () => (
                <Button.Default>
                    Generic Button
                </Button.Default>
        ))
        .add('button generic status (onClick)', () => (
            <Button.Default onClick={() => alert('Hello, Firefox!')}>
                Generic Button
            </Button.Default>
        ))
        .add('button generic status (disabled)', () => (
            <Button.Default disabled>
                Generic Button
            </Button.Default>
        ))
        .add('button generic status (puffy)', () => (
            <Button.Default size={'puffy'}>
                Generic Button
            </Button.Default>
        ))
        .add('button generic status (micro)', () => (
            <Button.Default size={'micro'}>
                Generic Button
            </Button.Default>
        ))
        .add('button primary status', () => (
            <Button.Default status={'primary'}>
                Primary Button
            </Button.Default>
        ))
        .add('button error status', () => (
            <Button.Default status={'error'}>
                Error Button
            </Button.Default>
        ))
        .add('button success status', () => (
            <Button.Default status={'success'}>
                Success Button
            </Button.Default>
        ))
        .add('button warning status', () => (
            <Button.Default status={'warning'}>
                Warning Button
            </Button.Default>
        ));
