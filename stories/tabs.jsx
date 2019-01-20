import React from "react";
import { storiesOf } from "@storybook/react";

import Tabs from "../src/Tabs";

export const tabsStories =
  storiesOf("Tabs", module)
    .add("single tab", () => (
      <Tabs.Container>
        <Tabs.Tab title={"Single Tab"} />
      </Tabs.Container>
    ))
    .add("multiple tabs", () => (
      <Tabs.Container>
        <Tabs.Tab title={"Tab 1"} />
        <Tabs.Tab title={"Tab 2"} />
        <Tabs.Tab title={"Tab 3"} />
      </Tabs.Container>
    ))
    .add("multiple tabs (large)", () => (
      <Tabs.Container size={"lg"}>
        <Tabs.Tab title={"Tab 1"} />
        <Tabs.Tab title={"Tab 2"} />
        <Tabs.Tab title={"Tab 3"} />
      </Tabs.Container>
    ))
    .add("multiple tabs onClick (large)", () => (
      <Tabs.Container size={"lg"}>
        <Tabs.Tab title={"Tab 1"} onClick={() => alert("Tab 1")} />
        <Tabs.Tab title={"Tab 2"} onClick={() => alert("Tab 2")} />
        <Tabs.Tab title={"Tab 3"} onClick={() => alert("Tab 3")} />
      </Tabs.Container>
    ));
