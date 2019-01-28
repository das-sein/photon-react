import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';
import { Card, CardActions, CardBody, CardHeader } from '../src/card';


export const cardStories =
    storiesOf('Card', module)
        .add('blank ', () => <Card size={'md'} shadow={10} />)
        .add('only text body ', () => (
            <Card size={'md'} shadow={10}>
                <CardBody>
                    A card with just some text.
                </CardBody>
            </Card>
        ))
        .add('only long text body ', () => (
            <Card size={'md'} shadow={10}>
                <CardBody>
                    A card with a considerable amount of text that should force
                    some kind of wrapping or other means of nicely displaying
                    the information to the user.
                </CardBody>
            </Card>
        ))
        .add('text body with titling ', () => (
            <Card size={'md'} shadow={10}>
                <CardBody title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </CardBody>
            </Card>
        ))
        .add('text body with long titling ', () => (
            <Card size={'md'} shadow={10}>
                <CardBody
                    title={"Some Title About the Content That is Lengthy"}
                    subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </CardBody>
            </Card>
        ))
        .add('only header ', () => (
            <Card size={'md'} shadow={10}>
                <CardHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </CardHeader>
            </Card>
        ))
        .add('header with content ', () => (
            <Card size={'md'} shadow={10}>
                <CardHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </CardHeader>
                <CardBody title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </CardBody>
            </Card>
        ))
        .add('header with content button ', () => (
            <Card button size={'md'} shadow={10}>
                <CardHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </CardHeader>
                <CardBody title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                </CardBody>
            </Card>
        ))
        .add('header with content and actions', () => (
            <Card size={'md'} shadow={10}>
                <CardHeader>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Keulemans_common_fox.png/250px-Keulemans_common_fox.png" />
                </CardHeader>
                <CardBody title={"Some Title"} subtitle={"Subtitle"}>
                    A card with just some text that describes the given card.
                    <CardActions>
                        <Button text={"Some default action"}></Button>
                        <Button primary text={"Some primary action"}></Button>
                    </CardActions>
                </CardBody>
            </Card>
        ));
