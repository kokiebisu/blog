import React from "react"
import { Nav } from "."

export default {
  title: "Design System/Atoms",
  component: Nav,
}

const Template = args => <Nav {...args} />

export const Navigation = Template.bind({})
Navigation.args = {
  label: "Nav",
}
