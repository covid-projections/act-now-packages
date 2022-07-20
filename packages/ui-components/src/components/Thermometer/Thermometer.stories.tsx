import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Thermometer from ".";

export default {
  title: "Components/Thermometer",
  component: Thermometer,
} as ComponentMeta<typeof Thermometer>;

const Template: ComponentStory<typeof Thermometer> = (args) => (
  <Thermometer {...args} />
);

export const Example = Template.bind({});
Example.args = {};
