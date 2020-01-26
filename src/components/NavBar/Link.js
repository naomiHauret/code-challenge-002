import React from "react"
import { NavLink } from "react-router-dom"

const Link = (props) => {
  const { children, to } = props
  return (
    <NavLink exact className="text-24 text-gray-300 no-underline" activeClassName="font-bold text-blue-100" to={to}>
      {children}
    </NavLink>
  )
}

export default Link
