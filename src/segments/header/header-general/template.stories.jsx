import React from "react"
import { HeaderTemplate } from "./template"
import * as content from "./content"

export default {
  title: "Segments/Header",
  component: HeaderTemplate,
}

const Template = args => <HeaderTemplate {...args} />

export const General = Template.bind({})
General.args = {
  ...content,
}
