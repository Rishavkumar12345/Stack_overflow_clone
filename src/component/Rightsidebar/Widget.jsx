import React from 'react'
import pen from '../../assets/pen.svg'
import comment from '../../assets/comment.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width={'15px'}/>
                    <p style={{paddingLeft:'10px'}}>Announcing more ways to learn and grow<br/> your skills</p>
                </div>

                <div className='right-sidebar-div-2'>
                    <img src={pen} alt="pen" width={'15px'}/>
                    <p style={{paddingLeft:'10px'}}>Why developer experience is the key to<br/> better software, straight from the..</p>
                </div>
        </div>
        
        <h4>Feature on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width={'15px'}/>
                <p style={{paddingLeft:'10px'}}>Announcing more ways to learn and grow your skills</p>
            </div>

            <div className='right-sidebar-div-2'>
                <img src={comment} alt="pen" width={'15px'}/>
                <p style={{paddingLeft:'10px'}}>Announcing more ways to learn and grow your skills</p>
            </div>
        </div>
        <h4>Host Meta Post</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-3'>
                <p>36 why was this spam flag declined, yet <br/> the question markde as spam?</p>
                <p>37 why was this spam flag declined, yet <br/> the question markde as spam?</p>
                <p>38 why was this spam flag declined, yet <br/> the question markde as spam?</p>
            </div>    
        </div>      
      
    </div>
  )
}

export default Widget
