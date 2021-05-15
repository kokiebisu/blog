import React from "react"
import { NavTextTemplate } from "./template"

export default {
  title: "Design System/Atoms/Text",
  component: NavTextTemplate,
}

const Template = args => <NavTextTemplate {...args} />

export const TextNav = Template.bind({})
TextNav.args = {
  label: "Label",
  handleRedirect: () => alert("Handle redirect"),
}
