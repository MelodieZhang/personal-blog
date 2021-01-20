import React from "react"
import { Link } from "gatsby"

const NavItem = ({ linkTo, children }) => (
  <li className="mr-4 sm:mr-8 my-0">
    <Link
      to={linkTo}
      className="group border-solid border-b block border-transparent leading-loose hover:font-bold focus:font-bold"
      activeClassName="font-bold border-primary"
    >
      {children}
    </Link>
  </li>
)

const navItems = [
  { id: `/`, text: `首页` },
  { id: `/archive`, text: `归档` },
  { id: `/about`, text: `关于` },
  { id: `/newsletter`, text: `Newsletter` },
]

const TopNav = ({ location }) => {
  return (
    <div className="my-20">
      <h1>
        <Link to={"/"}>Melodie's typing...</Link>
      </h1>
      <div className="text-xl text-secondary mt-4">
        Design, read, learn, create.
      </div>
      <nav className="mt-24 border-solid border-b border-third">
        <ul className="list-none flex">
          {navItems.map(({ id, text }) => (
            <NavItem key={id} linkTo={`${id}`}>
              <div>{text}</div>
            </NavItem>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TopNav
