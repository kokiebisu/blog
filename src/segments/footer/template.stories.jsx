import React from "react"
import { FooterTemplate } from "./template"

export default {
  title: "Templates",
  component: FooterTemplate,
}

const Template = args => <FooterTemplate {...args} />

export const Footer = Template.bind({})
Footer.args = {
  author: "Nobody",
}
