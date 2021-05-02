import React from "react"
import { NavTextTemplate } from "./template"

export default {
  title: "Design System/Atoms",
  component: NavTextTemplate,
}

const Template = args => <NavTextTemplate {...args} />

export const Navigation = Template.bind({})
Navigation.args = {
  label: "Nav",
}
