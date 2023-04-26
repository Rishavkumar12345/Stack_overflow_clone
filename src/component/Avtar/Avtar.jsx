import React from 'react'

function Avtar({children,backgroundColor,py,px,borderRadius,color,cursor,fontSize}) {

  const Style={
    backgroundColor,
    padding:`${py} ${px}`,
    borderRadius,
    color:color || "black",
    cursor: cursor || null,
    textAlign:"center",
    fontSize,
    textDecoration:"none"
  }

  return (
    <div style={Style}>
      {children}
    </div>
  )
}

export default Avtar
