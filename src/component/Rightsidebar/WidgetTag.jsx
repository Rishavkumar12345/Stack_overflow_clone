import React from 'react'

const WidgetTag = () => {

    const tag=['c','css','firebase','HTML','java','javascript','mern','mongodb','mysql']

  return (
    <div className='widget-tag'>
      <h3>watched Topics</h3>
      <div className='widget-tag-div'>
        {
            tag.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))
        }
      </div>
    </div>
  )
}

export default WidgetTag
