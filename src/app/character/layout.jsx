import React from 'react'
import AllNavigation from '../navigation/AllNavigation'
export default function layout({children}) {
  return (
    <AllNavigation>{children}</AllNavigation>
  )
}
