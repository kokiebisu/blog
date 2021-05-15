import React from "react"
import { SearchInputTemplate } from "./template"

export default {
  title: "Design System/Atoms/Input",
  component: SearchInputTemplate,
}

const Template = args => <SearchInputTemplate {...args} />

export const Search = Template.bind({})
Search.args = {
  onChange: () => alert("Input Changed"),
  value: "Some random input",
  onFocus: () => alert("he"),
  hasFocus: true,
}
