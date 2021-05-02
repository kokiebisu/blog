import React from "react"
import { SearchbarTemplate } from "./template"

export default {
  title: "Design System/Organisms/Search",
  component: SearchbarTemplate,
}

const Template = args => <SearchbarTemplate {...args} />

export const Searchbar = Template.bind({})
Searchbar.args = {
  expanded: false,
}
