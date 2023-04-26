import React from 'react'
import Questions from './Questions'

const Questionslist = ({questionslist}) => {
  return (
    <>
      {
        questionslist.map((question)=>(
            <Questions question={question} key={question.id}/>
        ))
      }
    </>
  )
}

export default Questionslist
