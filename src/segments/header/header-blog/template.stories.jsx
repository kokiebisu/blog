import React from "react"
import { BlogHeaderTemplate } from "./template"
import * as content from "./content"

export default {
  title: "Templates",
  component: BlogHeaderTemplate,
}

const Template = args => <BlogHeaderTemplate {...args} />

export const Blog = Template.bind({})
Blog.args = {
  ...content,
}
