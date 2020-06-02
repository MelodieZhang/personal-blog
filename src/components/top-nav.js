import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

import navStyle from "../css/top-nav.module.css"

const TopNav = ({ location }) => {
  const indexLinkStyle = {
    color: location.pathname === "/" ? `#000000` : `rgba(0, 0, 0, 0.7)`,
    fontWeight: location.pathname === "/" ? `500` : `400`,
  }
  const archiveLinkStyle = {
    color: location.pathname === "/archive" ? `#000000` : `rgba(0, 0, 0, 0.7)`,
    fontWeight: location.pathname === "/archive" ? `500` : `400`,
  }
  const aboutLinkStyle = {
    color: location.pathname === "/about" ? `#000000` : `rgba(0, 0, 0, 0.7)`,
    fontWeight: location.pathname === "/about" ? `500` : `400`,
  }
  const rssLinkStyle = {
    color: location.pathname === "/rss" ? `#000000` : `rgba(0, 0, 0, 0.7)`,
    fontWeight: location.pathname === "/rss" ? `500` : `400`,
  }
  return (
    <div>
      <h1
        style={{
          marginBottom: rhythm(0.5),
          marginTop: rhythm(1),
        }}
      >
        <Link
          style={{
            color: `black`,
            fontSize: `2.25rem`,
            boxShadow: `none`,
            textDecoration: `none`,
          }}
          to={"/"}
        >
          Melodie's typing...
        </Link>
      </h1>
      <div
        style={{
          fontSize: `1rem`,
        }}
      >
        Design, read, think, create.
      </div>
      <nav className={navStyle.top_nav}>
        <ul className={navStyle.nav_ul}>
          <li className={navStyle.nav_li}>
            <Link className={navStyle.li_link} style={indexLinkStyle} to={"/"}>
              首页
            </Link>
          </li>
          <li className={navStyle.nav_li}>
            <Link
              className={navStyle.li_link}
              style={archiveLinkStyle}
              to={"/archive"}
            >
              归档
            </Link>
          </li>
          <li className={navStyle.nav_li}>
            <Link
              className={navStyle.li_link}
              style={aboutLinkStyle}
              to={"/about"}
            >
              关于
            </Link>
          </li>
          <li className={navStyle.nav_li}>
            <Link
              className={navStyle.li_link}
              style={rssLinkStyle}
              to={"/rss.xml"}
            >
              RSS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default TopNav
