import React from "react"
import { GeneralHeaderTemplate } from "./template"
import * as content from "./content"

export default {
  title: "Templates",
  component: GeneralHeaderTemplate,
}

const Template = args => <GeneralHeaderTemplate {...args} />

export const General = Template.bind({})
General.args = {
  ...content,
}
