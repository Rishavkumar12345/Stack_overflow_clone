import React from 'react'
import {Link} from 'react-router-dom'
import Avtar from '../Avtar/Avtar'


const Displayans = ({question}) => {
  return (
    <div>
        {

        
            question.answer.map((ans)=>(
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerbody}</p>
                    <div className="ques-action-user">
                        <div>
                            <button type='button'>Share</button>
                            <button type='button'>Delete</button>
                        </div>
                        <div>
                            <p>answered {ans.answeron}</p>
                            <Link to={`/user/${ans.userid}`} className='user-link'>
                                <Avtar backgroundColor='green' px='8px' py='8px'>{ans.useranwered.charAt(0).toUpperCase()}</Avtar>
                                <div>
                                    {ans.useranwered}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Displayans
