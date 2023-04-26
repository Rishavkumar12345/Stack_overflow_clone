import React from 'react'
import {Link} from 'react-router-dom' 

const Questions = ({question}) => {
    

  return (
    <div className='display-question-container'>
        <div className='display-vote-ans'>
            <p>{question.upvotes}</p>
            <p>votes</p>
        </div>
        <div className='display-vote-ans'>
            <p>{question.noOfanswer}</p>
            <p>answers</p>
        </div>
        <div className='display-question-detail'>
            <Link to={`/Question/${question._id}`} className="question-title-link">{question.questionTilte}</Link>
            <div className='display-tag-time'>
                <div className='display-tag'>
                    {
                        question.questionTag.map((tag)=>(
                            <p key={tag}> {tag} </p>
                        ))
                    }
                </div>
                <p className='display-time'>
                    asked {question.askedon}{question.userpost}
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Questions

//{`/Questions/${question._id}`}