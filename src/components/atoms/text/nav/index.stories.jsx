import React from "react"
import { Nav } from "."

export default {
  title: "Design System/Atoms",
  component: Nav,
}

const Template = args => <NavTemplate {...args} />

export const Navigation = Template.bind({})
Navigation.args = {}
