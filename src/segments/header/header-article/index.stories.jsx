import React from "react"
import { ArticleHeaderTemplate } from "./template"
import * as content from "./content"

export default {
  title: "Templates",
  component: ArticleHeaderTemplate,
}

const Template = args => <ArticleHeaderTemplate {...args} />

export const Article = Template.bind({})
Article.args = {
  ...content,
}
