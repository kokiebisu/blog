import React from "react"
import { Article } from "../article"

export default {
  title: "Design System/Molecules",
  component: Article,
}

const Template = args => <Article {...args} />

export const Article = Template.bind({})
Article.args = {}
