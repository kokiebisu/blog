import React from "react"
import { AbstractArticleTemplate } from "./template"

export default {
  title: "Design System/Molecules/Article",
  component: AbstractArticleTemplate,
}

const Template = args => <AbstractArticleTemplate {...args} />

export const Abstract = Template.bind({})
Abstract.args = {
  category: "Product",
  date: "July 24, 2020",
  title: "ワクチン2回接種後に感染　長野県「抗体できる前か」",
  content:
    "長野県は16日、JA長野厚生連北信総合病院（同県中野市）の40代女性職員が、新型コロナウイルスのワクチン接種を2回受けた後、同ウイルスに感染したと発表した。女性は無症状という。県によると、女性は2回目の接種を8日に受けた。その後、14日に同病院で入院患者1人の感染が分かったため、同日に女性も抗原検査を受けたところ、陽性だったという。県の担当者は「2回目の接種後から時間が経っていないので、抗体ができる前に感染した可能性を考えている」と話した。",
  image:
    "https://images.unsplash.com/photo-1618556658017-fd9c732d1360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=959&q=80",
}
