import React from "react"
import Link from "gatsby-link"
import { Icon } from "../../icons"

export const HeaderTemplate = () => {
  return (
    <header className="flex items-center justify-between px-5 py-3">
      <div>
        <Icon variant="logo" width={150} height={30} />
      </div>
      <nav className="flex list-none">
        <li className="p-2">
          <Link>ホーム</Link>
        </li>
        <li className="p-2">
          <Link>ブログ</Link>
        </li>
        <li className="p-2">
          <Link>私について</Link>
        </li>
        <li className="p-2">
          <Link>お問い合わせ</Link>
        </li>
      </nav>
    </header>
  )
}
