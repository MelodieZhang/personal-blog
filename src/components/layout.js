import React from "react"
import TopNav from "./top-nav"

const Layout = ({ location, children }) => {
  return (
    <div className="max-w-screen-md mx-auto p-4 sm:p-16">
      <header>
        <TopNav location={location}></TopNav>
      </header>
      <main>{children}</main>
      <footer className="text-center mt-20">
        <div className="text-sm text-third">
          Melodie &copy; {new Date().getFullYear()} · All rights reserved
        </div>
      </footer>
    </div>
  )
}

export default Layout
