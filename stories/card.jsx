import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';
import Card from '../src/Card';


export const cardStories =
    storiesOf('Card', module)
        .add('blank ', () => <Card.Body size={'md'} shadow={10} />)
        .add('only text body', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Content>
                    A card with just some text.
                </Card.Content>
            </Card.Body>
        ))
        .add('only long text body', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Content>
                    A card with a considerable amount of text that should force
                    some kind of wrapping or other means of nicely displaying
                    the information to the user.
                </Card.Content>
            </Card.Body>
        ))
        .add('text body with titling', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </Card.Content>
            </Card.Body>
        ))
        .add('text body with titling (auto sized)', () => (
            <Card.Body auto size={'md'} shadow={10}>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </Card.Content>
            </Card.Body>
        ))
        .add('text body with long titling', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Content
                    title={"Some Title About the Content That is Lengthy"}
                    subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </Card.Content>
            </Card.Body>
        ))
        .add('only header', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
            </Card.Body>
        ))
        .add('only header (auto sized)', () => (
            <Card.Body auto size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
            </Card.Body>
        ))
        .add('header with content', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </Card.Content>
            </Card.Body>
        ))
        .add('header with content button', () => (
            <Card.Body button size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </Card.Content>
            </Card.Body>
        ))
        .add('header with content and action', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                    <Card.Actions>
                        <Button primary text={"Some primary action"}></Button>
                    </Card.Actions>
                </Card.Content>
            </Card.Body>
        ))
        .add('header with content and action (auto sized)', () => (
            <Card.Body auto size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                    <Card.Actions>
                        <Button primary text={"Some primary action"}></Button>
                    </Card.Actions>
                </Card.Content>
            </Card.Body>
        ))
        .add('header with content and actions', () => (
            <Card.Body size={'md'} shadow={10}>
                <Card.Header>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </Card.Header>
                <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                    <Card.Actions>
                        <Button text={"Default Action"}></Button>
                        <Button primary text={"Primary Action"}></Button>
                    </Card.Actions>
                </Card.Content>
            </Card.Body>
        ));
