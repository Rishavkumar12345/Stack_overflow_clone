import React from 'react'
import './Askquestion.css'

const Askquestion = () => {
    

  return (
    <div className='ask-question'>
      <div className="ask-que-container">
        <h1>Ask Question</h1>
        <form className='ask-form-container'>
          <div className="ask-form-container">
            <label htmlFor="ask-que-title">
              <h3>Tilte</h3>
              <p>Be specific and imagine you're asking a question to another persons</p>
              <input type="text" className='ask-que-title' placeholder="e.g. Is there an R function to finding the   
                index of an 
              element in a vector?"/>
            </label>
            <label htmlFor="ask-que-body">
              <h3>Body</h3>
              <p>Include all the information someone would need to answer your question</p>
              <textarea name="ask-que-body" id="" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="ask-que-tag">
              <h3>Tags</h3>
              <p>Add up to 5 tag in description what your question is about</p>
              <input type="text" className='ask-que-tag' placeholder="e.g. XML typescript workpress"/>
            </label>
            
          </div>
          <input type="submit" value="Review your question" className='review-btn'/>
        </form>
      </div>
    </div>
  )
}

export default Askquestion
