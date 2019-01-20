import React from "react";
import { storiesOf } from "@storybook/react";
import MessageBar from "../src/MessageBar";


export const messageBarStories =
  storiesOf("MessageBar", module)
    .add("generic", () => (
      <MessageBar>
        This is a generic message
      </MessageBar>
    ))
    .add("generic (auto sized)", () => (
      <MessageBar width={"auto"}>
        This is a generic message
      </MessageBar>
    ))
    .add("generic with dismiss", () => (
      <MessageBar dismiss>
        This is a generic message
      </MessageBar>
    ))
    .add("generic with action button and dismiss (auto sized)", () => (
      <MessageBar
        dismiss
        action={"Check Something"}
        onClick={e => alert("Hello, Firefox!")}
        width={"auto"}
      >
        This is a generic message
      </MessageBar>
    ))
    .add("generic with dismiss (auto sized)", () => (
      <MessageBar dismiss width={"auto"}>
        This is a generic message
      </MessageBar>
    ))
    .add("generic with dismiss action (auto sized)", () => (
      <MessageBar
        dismiss
        onDismiss={e => alert("Hello, Firefox!")}
        width={"auto"}
      >
        This is a generic message
      </MessageBar>
    ))
    .add("success with dismiss (auto sized)", () => (
      <MessageBar
        dismiss
        status={"success"}
        width={"auto"}
      >
        This is a success message
      </MessageBar>
    ))
    .add("success with action button and dismiss (auto sized)", () => (
      <MessageBar
        dismiss
        status={"success"}
        action={"Success Action"}
        width={"auto"}
      >
        This is a success message
      </MessageBar>
    ))
    .add("error with dismiss (auto sized)", () => (
      <MessageBar
        dismiss
        status={"error"}
        width={"auto"}
      >
        This is an error message
      </MessageBar>
    ))
    .add("warning with dismiss (auto sized)", () => (
      <MessageBar
        dismiss
        status={"warning"}
        width={"auto"}
      >
        This is a warning message
      </MessageBar>
    ))
