import React from "react"
import TopNav from "./top-nav"

const Layout = ({ location, children }) => {
  return (
    <div className="max-w-prose mx-auto p-6">
      <header>
        <TopNav location={location}></TopNav>
      </header>
      <main>{children}</main>
      <footer className="text-center my-8">
        <div className="text-sm">
          Melodie &copy; {new Date().getFullYear()} · All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Layout
