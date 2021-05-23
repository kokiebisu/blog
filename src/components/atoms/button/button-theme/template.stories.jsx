import React from "react"
import { ThemeButtonTemplate } from "./template"

export default {
  title: "Design System/Atoms/Button",
  component: ThemeButtonTemplate,
}

const Template = args => <ThemeButtonTemplate {...args} />

export const Theme = Template.bind({})
Theme.args = {
  handleThemeChange: () => alert("Theme should be changed"),
}
