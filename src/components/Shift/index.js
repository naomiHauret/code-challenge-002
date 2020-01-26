import React from "react"
import Button from "components/Button"
const Shift = (props) => {
  const { area, booked, timestamp, showArea, isOverlapping, canBeCancelled, handleBook, handleCancel } = props

  return (
    <div className="flex items-center">
      <div className="text-18">
        {timestamp}
        {showArea && <div className="mt-5 text-16 text-blue-200">{area}</div>}
      </div>

      <div className="ml-auto flex items-center font-bold">
        {isOverlapping && <div className="mr-20 text-red-300">Overlapping !</div>}
        {!booked ? (
          <Button theme="success" additionalStyles="min-w-120" disabled={isOverlapping} onClick={handleBook}>
            Book
          </Button>
        ) : (
          <div className="mr-20">Booked</div>
        )}

        {canBeCancelled && (
          <Button theme="danger" additionalStyles="min-w-120" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </div>
    </div>
  )
}

export default Shift
