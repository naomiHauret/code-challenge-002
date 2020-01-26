import React from "react"
import AvailableShifts from "pages/AvailableShifts"
import BookedShifts from "pages/BookedShifts"

export default [
  {
    path: "/",
    name: "My shifts",
    component: <BookedShifts />,
  },
  {
    path: "/available-shifts",
    name: "Available shifts",
    component: <AvailableShifts />,
  },
]
