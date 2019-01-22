import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';


export const buttonStories =
    storiesOf('Button', module)
        .add('default', () => (
            <Button text={"Button"} />
        ))
        .add('default disabled', () => (
            <Button text={"Button"} disabled />
        ))
        .add('default (micro)', () => (
            <Button micro text={"Button"} />
        ))
        .add('default disabled (micro)', () => (
            <Button micro text={"Button"} disabled />
        ))
        .add('default (puffy)', () => (
            <Button puffy text={"Button"} />
        ))
        .add('default disabled (puffy)', () => (
            <Button puffy text={"Button"} disabled />
        ))
        .add('default ghost', () => (
            <Button ghost text={<img src="https://i.imgur.com/nVlbTYR.png" />} />
        ))
        .add('default ghost disabled', () => (
            <Button ghost disabled text={<img src="https://i.imgur.com/nVlbTYR.png" />} />
        ))
        .add('primary', () => (
            <Button primary text={"Button"} />
        ))
        .add('primary disabled', () => (
            <Button primary text={"Button"} disabled />
        ))
        .add('primary (micro)', () => (
            <Button primary micro text={"Button"} />
        ))
        .add('primary disabled (micro)', () => (
            <Button primary micro text={"Button"} disabled />
        ))
        .add('primary (puffy)', () => (
            <Button primary puffy text={"Button"} />
        ))
        .add('primary disabled (puffy)', () => (
            <Button primary puffy text={"Button"} disabled />
        ));
