import React from "react"
import { ProfileBadgeTemplate } from "./template"

export default {
  title: "Design System/Molecules/Badge",
  component: ProfileBadgeTemplate,
}

const Template = args => <ProfileBadgeTemplate {...args} />

export const Profile = Template.bind({})
Profile.args = {
  image:
    "https://images.unsplash.com/photo-1534342357876-491359270a66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  name: "Kenichi Okiebisu",
  title: "Lead Product Owner",
}
