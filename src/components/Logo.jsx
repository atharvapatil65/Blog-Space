import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div style={{ width }} className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      BlogSpace
    </div>
  )
}

export default Logo