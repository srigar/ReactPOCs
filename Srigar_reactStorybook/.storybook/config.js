import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/button.js");
  require("../stories/inputField.js");
  require("../stories/banner.js");
  require("../stories/decoratorsUsage.js");
  require("../stories/addonsUsage.js");
}

configure(loadStories, module);
