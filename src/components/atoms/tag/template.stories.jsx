import React from "react"
import { TagTemplate } from "./template"

export default {
  title: "Design System/Atoms",
  component: TagTemplate,
}

const Template = args => <TagTemplate {...args} />

export const Tag = Template.bind({})
Tag.args = {
  label: "Label",
}
