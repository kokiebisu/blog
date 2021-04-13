import React from "react"
import { Nav } from "."

export default {
  title: "Design System/Atoms",
  component: Nav,
}

const Template = args => <NavTemplate {...args} />

export const Nav = Template.bind({})
Nav.args = {}
