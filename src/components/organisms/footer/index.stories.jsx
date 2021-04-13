import React from "react"

import { FooterTemplate } from "./template"

export default {
  title: "Design System/Organisms",
  component: FooterTemplate,
}

const Template = args => <FooterTemplate {...args} />

export const Footer = Template.bind({})
Footer.args = {}
