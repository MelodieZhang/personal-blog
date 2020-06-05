/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const navItemStyles = {
  borderBottom: `1px solid transparent`,
  color: `primary`,
  display: `block`,
  textDecoration: `none`,
  zIndex: 1,
  margin: `0 0 0 0`,
  lineHeight: `navigation`,
  "&:hover, &:focus": { fontWeight: "bold" },
}

const NavItem = ({ linkTo, children }) => (
  <li
    sx={{
      margin: `0 0 0 0`,
      padding: `10`,
      marginRight: `5`,
    }}
  >
    <Link
      to={linkTo}
      activeClassName="active"
      sx={{
        ...navItemStyles,
        "&.active": {
          fontWeight: `bold`,
          borderBottomColor: `primary`,
        },
      }}
    >
      {children}
    </Link>
  </li>
)

const navItems = [
  { id: `/`, text: `首页` },
  { id: `archive`, text: `归档` },
  { id: `about`, text: `关于` },
  { id: `rss.xml`, text: `订阅` },
]

const TopNav = ({ location }) => {
  return (
    <div
      sx={{
        marginTop: `9`,
        marginBottom: `7`,
      }}
    >
      <h1
        sx={{
          marginBottom: `3`,
        }}
      >
        <Link
          sx={{
            color: `primary`,
            fontSize: `6`,
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
          color: `primary`,
          fontSize: `1`,
        }}
      >
        Design, read, think, create.
      </div>
      <nav
        sx={{
          marginTop: `9`,
          borderBottomWidth: `1px`,
          borderBottomColor: `divider`,
          borderBottomStyle: `solid`,
        }}
      >
        <ul
          sx={{
            listStyle: `none`,
            display: `flex`,
            margin: `0 0 0 0`,
          }}
        >
          {navItems.map(({ id, text }) => (
            <NavItem key={id} linkTo={`/${id}/`}>
              <div>{text}</div>
            </NavItem>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TopNav
