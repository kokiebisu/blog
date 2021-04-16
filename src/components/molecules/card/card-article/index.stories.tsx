import React from "react"
import { ArticleCard } from "."

export default {
  title: "Design System/Molecules/Card",
  component: ArticleCard,
}

const Template = args => <ArticleCard {...args} />

export const Article = Template.bind({})
Article.args = {
  title: "Title",
  content: "Content",
}
