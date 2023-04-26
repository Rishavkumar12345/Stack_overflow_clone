import React from 'react'
import './Rightsidebar.css'
import Widget from './Widget'
import WidgetTag from './WidgetTag'

const Rightsidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTag/>
    </aside>
  )
}

export default Rightsidebar
