import React from "react"

import { HeaderTemplate } from "./template"

export default {
  title: "Design System/Organisms",
  component: HeaderTemplate,
}

const Template = args => <HeaderTemplate {...args} />

export const Header = Template.bind({})
Header.args = {}
