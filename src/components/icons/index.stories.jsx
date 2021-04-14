import React from "react"
import { Icon } from "."

export default {
  title: "Assets/Icons",
  component: HeaderTemplate,
}

const Template = args => <Icon {...args} />

export const Logo = Template.bind({})
Logo.args = {
  variant: "logo",
}
