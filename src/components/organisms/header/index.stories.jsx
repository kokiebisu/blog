import React from "react"

import { HeaderTemplate } from "./template"
import * as content from "./content"

export default {
  title: "Design System/Organisms",
  component: HeaderTemplate,
}

const Template = args => <HeaderTemplate {...args} />

export const Header = Template.bind({})
Header.args = {
  ...content,
}
