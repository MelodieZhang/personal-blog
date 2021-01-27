import React from "react"

export const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="24px"
      height="24px"
      className="fill-current text-primary"
    >
      <path d="M24 0v24H0V0h24z" fill="none" opacity=".87" />
      <path d="M12.29 8.71L9.7 11.3c-.39.39-.39 1.02 0 1.41l2.59 2.59c.63.63 1.71.18 1.71-.71V9.41c0-.89-1.08-1.33-1.71-.7z" />
    </svg>
  )
}

export const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width="24px"
      height="24px"
      className="fill-current text-primary"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z" />
    </svg>
  )
}

export const ArrowForward = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18px"
      fill="white"
      viewBox="0 0 24 24"
      width="18px"
      className="fill-current text-primary"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
    </svg>
  )
}
