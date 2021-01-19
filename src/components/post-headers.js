import React from "react"

// Heading 1 within a post
export const PostH1 = ({ children }) => {
  return <h3 className="text-xl my-6">{children}</h3>
}

// Heading 2 within a post
export const PostH2 = ({ children }) => {
  return <h4 className="text-lg my-2">{children}</h4>
}

// Link embedded in a heading
export const HLink = ({ to, title }) => {
  return (
    <a href={to} rel="noreferrer" target="_blank">
      {title}
    </a>
  )
}
