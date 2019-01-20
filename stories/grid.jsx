import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../src/Button";
import Card from "../src/Card";
import Grid from "../src/Grid";

export const gridStories =
  storiesOf("Grid", module)
    .add("grid row of cards", () => (
      <Grid.Row gap={16}>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
      </Grid.Row>
    ))
    .add("grid row of cards with one action", () => (
      <Grid.Row gap={16}>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
            <Card.Actions>
              <Button status={"primary"}>Primary Action</Button>
            </Card.Actions>
          </Card.Content>
        </Card.Body>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
      </Grid.Row>
    ))
    .add("multiple grid rows of cards", () => (
      <div>
        <Grid.Row gap={16} margin={32}>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
        </Grid.Row>
        <Grid.Row gap={32}>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
        </Grid.Row>
      </div>
    ))
    .add("multiple grid rows of cards with actions", () => (
      <div>
        <Grid.Row gap={16} margin={32}>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
              <Card.Actions>
                <Button status={"primary"}>Primary Action</Button>
              </Card.Actions>
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
        </Grid.Row>
        <Grid.Row gap={32}>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
              <Card.Actions>
                <Button status={"primary"}>Primary Action</Button>
              </Card.Actions>
            </Card.Content>
          </Card.Body>
        </Grid.Row>
      </div>
    ))
    .add("grid column of cards", () => (
      <Grid.Column gap={16}>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
        <Card.Body type={"button"} size={"md"} shadow={10}>
          <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
            A card with just some text that describes the given card.
          </Card.Content>
        </Card.Body>
      </Grid.Column>
    ))
    .add("multiple grid columns of cards", () => (
      <div>
        <Grid.Column auto gap={16} margin={32}>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
        </Grid.Column>
        <Grid.Column auto gap={32}>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
          <Card.Body type={"button"} size={"md"} shadow={10}>
            <Card.Content title={"Some Title"} subtitle={"Subtitle"}>
              A card with just some text that describes the given card.
            </Card.Content>
          </Card.Body>
        </Grid.Column>
      </div>
    ))
