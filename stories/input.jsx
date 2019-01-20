import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../src/Card";
import Button from "../src/Button";
import Grid from "../src/Grid";
import Input from "../src/Input";

/* Icons for display purposes */
import LoginIcon from "photon-icons/icons/desktop/login-16.svg";
import MailIcon from "photon-icons/icons/desktop/mail-16.svg";
import SearchIcon from "photon-icons/icons/desktop/search-16.svg";
import WarningIcon from "photon-icons/icons/desktop/warning-16.svg";


export const inputStories =
  storiesOf("Input", module)
    .add("text field with placeholder and label", () => (
      <Input.Text
        name={"some-input"}
        label={"A label for the input"}
        placeholder={"Some placeholder text..."}
        icon={<SearchIcon />}
      />
    ))
    .add("text field with placeholder and label (warning)", () => (
      <Input.Text
        name={"some-input"}
        label={"A label for the input"}
        placeholder={"Some placeholder text..."}
        icon={<WarningIcon />}
        status={"warning"}
      />
    ))
    .add("text field with placeholder and label (error)", () => (
      <Input.Text
        name={"some-input"}
        label={"A label for the input"}
        placeholder={"Some placeholder text..."}
        icon={<WarningIcon />}
        status={"error"}
      />
    ))
    .add("text field for password with placeholder and label", () => (
      <Input.Text
        password
        name={"some-input"}
        label={"Password"}
        placeholder={"Put your password here..."}
      />
    ))
    .add("example login form with Button, Grid, and Card", () => (
      <Card.Body size={"md"} shadow={10} width={"auto"}>
        <Card.Content title={"Login"}>
          <form>
            <Grid.Column gap={8}>
              <Input.Text
                inner
                name={"username"}
                label={"Username"}
                placeholder={"Username or email address"}
                icon={<MailIcon />}
              />
              <Input.Text
                name={"password"}
                label={"Password"}
                placeholder={"Password"}
                icon={<LoginIcon />}
              />
              <a href="#">Reset password</a>
            </Grid.Column>
            <Card.Actions>
              <Button
                type={"submit"}
                status={"primary"}
                onClick={e => {
                  e.preventDefault();
                  alert("Hello, Firefox!");
                }}
              >
                Login
              </Button>
            </Card.Actions>
          </form>
        </Card.Content>
      </Card.Body>
    ))
    .add("radio button", () => (
      <Input.Radio name={"some-option"} label={"This is some radio option"} value={"some_value"} />
    ))
    .add("checkbox", () => (
      <div>
        <Input.Checkbox name={"some-check"} label={"This is a checkbox"} />
      </div>
    ))
    .add("checkbox with sublabel", () => (
      <div>
        <Input.Checkbox
          name={"some-check"}
          label={"This is a checkbox"}
          sublabel={"A sublabel for the checkbox that describes it."}
        />
      </div>
    ))
    .add("checkboxes (nested)", () => (
      <div>
        <Input.Checkbox
          name={"some-check-0"}
          label={"This is a checkbox at top-level"}
          sublabel={"A sublabel for the checkbox that describes it."}
        >
          <Input.Checkbox
            name={"some-check-1"}
            label={"This is the second level (there is one more)"}
          >
            <Input.Checkbox
              name={"some-check-2"}
              label={"So far, this is the farthest we can nest."}
              sublabel={"A sublabel for the checkbox that describes it."}
            />
          </Input.Checkbox>
        </Input.Checkbox>
      </div>
    ))
