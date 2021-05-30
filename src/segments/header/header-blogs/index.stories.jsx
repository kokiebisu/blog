import React from "react"
import { BlogsHeaderTemplate } from "./template"
import * as content from "./content"

export default {
  title: "Templates",
  component: BlogsHeaderTemplate,
}

const Template = args => <BlogsHeaderTemplate {...args} />

export const Blogs = Template.bind({})
Blogs.args = {
  ...content,
}
