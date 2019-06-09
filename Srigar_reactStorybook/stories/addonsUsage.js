import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";

import Button from "../src/components/button/button";

const stories = storiesOf("Addons Sample", module);
stories.addDecorator(withKnobs);

stories.add("Action Addon", () => {
  return <Button btnText="Submit" onClick={action("Triggered")} />;
});

stories.add("Knobs Addon", () => {
  const name = text("Name", "User");
  const showAddress = boolean("showAddress", false);

  const content = `Hi ${name}, click showAddress option in knobs tab to see address`;
  return (
    <div>
      By the help of knob tab we can test all the props values <br />
      <br />
      {content}
      {showAddress && (
        <p>
          <b style={{ color: "red" }}>Address:</b> Lorem Ipsum Lorem Ipsum{" "}
        </p>
      )}
    </div>
  );
});

stories.add(
  "Notes Addon",
  () => {
    return <Button btnText="Submit" onClick={action("Triggered")} />;
  },
  {
    notes: "Sample notes for the story. Will be helpful for maintainence purpose. Devloper easily come to know the usage of components"
  }
);
