import React from "react"

import { rhythm } from "../utils/typography"
import TopNav from "./top-nav"

const Layout = ({ location, children }) => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(28),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <TopNav location={location}></TopNav>
      </header>
      <main>{children}</main>
      <footer
        style={{
          textAlign: `center`,
          marginTop: `5.25rem`,
        }}
      >
        <div
          style={{
            color: `rgba(0, 0, 0, 0.4)`,
            fontSize: `0.875rem`,
            marginTop: `5rem`,
          }}
        >
          Melodie &copy; {new Date().getFullYear()} · All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Layout
