import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Input from "../src/components/textField/inputField";
import Button from '../src/components/button/button';

const stories = storiesOf("Decorators", module);

const styles = {
  textAlign: "center"
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;

stories.addDecorator(CenterDecorator);

stories.add("Center Aligned Input", () => {
  return <Input placeholder="Enter Value" />;
});

stories.add('Center Aligned Button', () => {
    return <Button btnText="Box Shadow" className="btn" />
});


