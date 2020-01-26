import React, { Suspense } from "react"
import { ShiftsApiProvider } from "contexts/Shifts"
import ListShiftsSkeleton from "components/ListShiftsSkeleton"
import Consumer from "./Consumer"

const AvailableShifts = () => {
  return (
    <Suspense fallback={<ListShiftsSkeleton />}>
      <ShiftsApiProvider>
        <Consumer />
      </ShiftsApiProvider>
    </Suspense>
  )
}

export default AvailableShifts
