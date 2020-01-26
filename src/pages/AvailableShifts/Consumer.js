import React, { useContext, useState, Fragment } from "react"
import { ShiftsApiContext } from "contexts/Shifts"
import RadioAreaFilter from "components/RadioAreaFilter"
import ListShifts from "components/ListShifts"

const AvailableShifts = () => {
  const { availableShiftsList, areas } = useContext(ShiftsApiContext)
  const [currentAreaFilter, setAreaFilter] = useState(areas[0])

  return (
    <Fragment>
      <div className="flex flex-col sm:flex-row items-center mb-30">
        <div className="mb-20 sm:mb-0 sm:mr-30 font-bold text-blue-100">Filter by city: </div>
        {areas.map((area) => {
          const count = Object.keys(availableShiftsList[area])
            .map((timestamp) => availableShiftsList[area][timestamp].length)
            .reduce((total, shifts) => {
              return total + shifts
            })
          return (
            <RadioAreaFilter
              additionalStyles="mb-20 sm:mb-0 sm:mr-10"
              key={area}
              name="filter-area"
              id={`radio-${area}`}
              checked={area === currentAreaFilter}
              value={area}
              onChange={(e) => {
                e.preventDefault()
                setAreaFilter(area)
              }}
            >
              {area} <span>({count})</span>
            </RadioAreaFilter>
          )
        })}
      </div>

      <ListShifts
        showShiftsAmount={false}
        showArea={false}
        emptyStateMessage="No shifts available"
        list={availableShiftsList[currentAreaFilter]}
      />
    </Fragment>
  )
}

export default AvailableShifts
