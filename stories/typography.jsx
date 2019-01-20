import React from "react";
import { storiesOf } from "@storybook/react";

import Typography from "../src/Typography";

export const typographyStories =
  storiesOf("Typography", module)
    .add("selection table", () => (
      <div>
        <p>
          <Typography type={"display"}>Display 20</Typography>
        </p>
        <p>
          <Typography type={"title"} size={"xl"}>Title 40</Typography>
        </p>
        <p>
          <Typography type={"title"} size={"lg"}>Title 30</Typography>
        </p>
        <p>
          <Typography type={"title"} size={"md"}>Title 20</Typography>
        </p>
        <p>
          <Typography type={"title"} size={"sm"}>Title 10</Typography>
        </p>
        <p>
          <Typography type={"body"} size={"lg"}>Body 30</Typography>
        </p>
        <p>
          <Typography type={"body"} size={"md"}>Body 20</Typography>
        </p>
        <p>
          <Typography type={"body"} size={"sm"}>Body 10</Typography>
        </p>
        <p>
          <Typography type={"caption"} size={"lg"}>Caption 30</Typography>
        </p>
        <p>
          <Typography type={"caption"} size={"md"}>Caption 20</Typography>
        </p>
        <p>
          <Typography type={"caption"} size={"sm"}>Caption 10</Typography>
        </p>
      </div>
    ))
