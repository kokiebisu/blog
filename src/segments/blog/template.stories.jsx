import React from "react"
import { BlogSegmentTemplate } from "./template"
import * as mockData from "./mock"

export default {
  title: "Templates",
  component: BlogSegmentTemplate,
}

const Template = args => <BlogSegmentTemplate {...args} />

export const Blog = Template.bind({})
Blog.args = {
  ...mockData,
}
