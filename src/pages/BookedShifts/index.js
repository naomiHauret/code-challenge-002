import React, { Suspense } from "react"
import { ShiftsApiProvider } from "contexts/Shifts"
import Consumer from "./Consumer"
import ListShiftsSkeleton from "components/ListShiftsSkeleton"

const BookedShifts = () => {
  return (
    <Suspense fallback={<ListShiftsSkeleton />}>
      <ShiftsApiProvider>
        <Consumer />
      </ShiftsApiProvider>
    </Suspense>
  )
}

export default BookedShifts
