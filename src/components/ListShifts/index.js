import React, { Fragment, useContext } from "react"
import { ShiftsApiContext } from "contexts/Shifts"
import { formatSimpleTime, timeDiffBetween, minutesToTime } from "utils/datetime"
import Shift from "components/Shift"

const ListShifts = (props) => {
  const { list, showArea, emptyStateMessage, showShiftsAmount } = props
  const { data, overlappingList, useBookShift, useCancelShift } = useContext(ShiftsApiContext)

  return (
    <div className="border-solid border-1 border-gray-300">
      {Object.keys(list).map((timestamp, tid) => {
        const numberOfShifts = list[timestamp].length
        let cumulatedMinutes
        if (showShiftsAmount && numberOfShifts > 0) {
          cumulatedMinutes = list[timestamp]
            .map((id) => timeDiffBetween(data[id].startTime, data[id].endTime))
            .reduce((total, hours) => total + hours)
        }
        return (
          <Fragment key={tid}>
            <div className="text-blue-100 flex items-center flex-col sm:flex-row bg-gray-100 p-10 border-0 border-b-1 border-solid border-gray-300">
              <h3 key={`${tid}-title`}>{timestamp}</h3>
              {showShiftsAmount && numberOfShifts > 0 && (
                <div className="sm:text-14 ml-auto">
                  {numberOfShifts} {numberOfShifts > 1 ? "shifts" : "shift"}, {minutesToTime(cumulatedMinutes)}
                </div>
              )}
            </div>
            <ul className="bg-white-000 text-blue-100" key={`${tid}-list`}>
              {numberOfShifts === 0 ? (
                <li className="py-20 italic text-center border-0 border-b-1 border-solid border-gray-300">
                  {emptyStateMessage}
                </li>
              ) : (
                list[timestamp].map((id) => {
                  const shift = data[id]
                  const canBeBooked = shift.startTime > Date.now() && shift.endTime > Date.now()
                  const canBeCancelled = shift.startTime > Date.now() && shift.booked

                  return canBeBooked ? (
                    <li className="p-10 border-0 border-b-1 border-solid border-gray-300" key={id}>
                      <Shift
                        area={shift.area}
                        booked={shift.booked}
                        timestamp={formatSimpleTime(shift.startTime, shift.endTime)}
                        showArea={showArea}
                        isOverlapping={overlappingList.includes(id)}
                        canBeCancelled={canBeCancelled}
                        handleBook={() => {
                          useBookShift(data, id)
                        }}
                        handleCancel={() => {
                          useCancelShift(data, id)
                        }}
                      />
                    </li>
                  ) : (
                    <Fragment key={id} />
                  )
                })
              )}
            </ul>
          </Fragment>
        )
      })}
    </div>
  )
}

export default ListShifts
