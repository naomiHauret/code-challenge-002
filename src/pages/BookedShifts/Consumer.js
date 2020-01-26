import React, { useContext, Fragment } from "react"
import { ShiftsApiContext } from "contexts/Shifts"
import ListShifts from "components/ListShifts"
const BookedShifts = () => {
  const { bookedList } = useContext(ShiftsApiContext)

  return (
    <ListShifts
      showShiftsAmount={true}
      showArea={true}
      emptyStateMessage="No shifts booked for that day"
      list={bookedList}
    />
  )
}

export default BookedShifts
