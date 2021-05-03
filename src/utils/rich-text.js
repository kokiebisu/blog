import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

const Bold = ({ children }) => <p className="bold">{children}</p>

const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: text => text.replace("!", "?"),
}

export { options, Bold, Text }
