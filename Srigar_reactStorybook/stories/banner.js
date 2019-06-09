import React from "react";
import { storiesOf } from "@storybook/react";
import Banner from "../src/components/banner/banner";

const stories = storiesOf("Banner", module);

stories.add("Dyncamic text", () => {
  return (
    <Banner message="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum " />
  );
});

stories.add("Show close icon", () => {
  return (
    <Banner
      showCloseIcon
      message="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
    />
  );
});

stories.add("Custom style", () => {
  return (
    <Banner
      message="Custom Style"
      style={{
        border: "1px solid red",
        color: "white",
        background: "green"
      }}
      showCloseIcon
    />
  );
});

stories.add("Large text ellipsis", () => {
  return (
    <Banner
      message="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
      showCloseIcon
    />
  );
});
