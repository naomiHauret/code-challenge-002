import React, { Fragment } from "react"
import styles from "./index.module.css"
const ListShiftsSkeleton = () => (
  <Fragment>
    <div className={`w-full py-50 mb-20 ${styles.shimmer}`} />
    <div className={`w-full py-50 mb-20 ${styles.shimmer}`} />
    <div className={`w-full py-50 mb-20 ${styles.shimmer}`} />
    <div className={`w-full py-50 mb-20 ${styles.shimmer}`} />
  </Fragment>
)

export default ListShiftsSkeleton
