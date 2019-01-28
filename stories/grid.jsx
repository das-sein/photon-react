import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/Button';
import Card from '../src/Card';
import Grid from '../src/Grid';

export const gridStories =
    storiesOf('Grid', module)
        .add('grid row of cards', () => (
            <Grid.Row gap={16}>
                <Card.Body button size={'md'} shadow={10}>
                    <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                        A card with just some text that describes the given card.
                    </Card.Content>
                </Card.Body>
                <Card.Body button size={'md'} shadow={10}>
                    <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                        A card with just some text that describes the given card.
                    </Card.Content>
                </Card.Body>
                <Card.Body button size={'md'} shadow={10}>
                    <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                        A card with just some text that describes the given card.
                    </Card.Content>
                </Card.Body>
            </Grid.Row>
        ))
        .add('grid row of cards with one action', () => (
            <Grid.Row gap={16}>
                <Card.Body button size={'md'} shadow={10}>
                    <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                        A card with just some text that describes the given card.
                    </Card.Content>
                </Card.Body>
                <Card.Body button size={'md'} shadow={10}>
                    <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                        A card with just some text that describes the given card.
                        <Card.Actions>
                            <Button primary text={"Primary Action"} />
                        </Card.Actions>
                    </Card.Content>
                </Card.Body>
                <Card.Body button size={'md'} shadow={10}>
                    <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                        A card with just some text that describes the given card.
                    </Card.Content>
                </Card.Body>
            </Grid.Row>
        ))
        .add('multiple grid rows of cards', () => (
            <div>
                <Grid.Row gap={16} margin={32}>
                    <Card.Body button size={'md'} shadow={10}>
                        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                            A card with just some text that describes the given card.
                        </Card.Content>
                    </Card.Body>
                    <Card.Body button size={'md'} shadow={10}>
                        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                            A card with just some text that describes the given card.
                        </Card.Content>
                    </Card.Body>
                    <Card.Body button size={'md'} shadow={10}>
                        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                            A card with just some text that describes the given card.
                        </Card.Content>
                    </Card.Body>
                </Grid.Row>
                <Grid.Row gap={32}>
                    <Card.Body button size={'md'} shadow={10}>
                        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                            A card with just some text that describes the given card.
                        </Card.Content>
                    </Card.Body>
                    <Card.Body button size={'md'} shadow={10}>
                        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                            A card with just some text that describes the given card.
                        </Card.Content>
                    </Card.Body>
                    <Card.Body button size={'md'} shadow={10}>
                        <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
                            A card with just some text that describes the given card.
                        </Card.Content>
                    </Card.Body>
                </Grid.Row>
            </div>
        ));
