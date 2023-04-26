import React from 'react'
import {Link, useParams} from 'react-router-dom'
import upvote from '../../assets/down.svg'
import downvote from '../../assets/up.svg'
import './Questions.css'
import Avtar from '../../component/Avtar/Avtar'
import Displayans from './Displayans'

const Questiondetails = () => {

  const {id}=useParams()

    const questionslist=[{
        _id:'1',
        upvotes:3,
        downvotes:2,
        noOfanswer:2,
        questionTilte:'what is function?',
        questionBody:'it meat to be',
        questionTag: ['Java','node js','react js'],
        userpost:'mango',
        askedon:'jan 1',
        userid:1,
        answer:[{
          answerbody:"Mahesh",
          useranwered:"kumar",
          answeron:"jan 2",
          userid:2
        }]
      },{
        _id:'2',
        upvotes:3,
        downvotes:2,
        noOfanswer:0,
        questionTilte:'what is function?',
        questionBody:'it meat to be',
        questionTag: ['Java','node js','react js'],
        userpost:'mango',
        askedon:'jan 1',
        userid:2,
        answer:[{
          answerbody:"Mahesh",
          useranwered:"kumar",
          answeron:"jan 2",
          userid:2
        }]
      },{
        _id:'3',
        upvotes:3,
        downvotes:2,
        noOfanswer:3,
        questionTilte:'what is function?',
        questionBody:'it meat to be',
        questionTag: ['Java','node js','react js'],
        userpost:'mango',
        askedon:'jan 1',
        userid:2,
        answer:[{
          answerbody:"Mahesh",
          useranwered:"kumar",
          answeron:"jan 2",
          userid:2
        }]
      }]

  return (
    <div className='question-detail-page'>
       {
        questionslist===null?<h1>Loading..</h1>:
        <>
        {
          questionslist.filter(ques=>ques._id===id).map(ques=>(
            <div key={ques._id}>
              <section className='ques-detail-container'>
                <h1>{ques.questionTilte}</h1>
                <div className="ques-detail-container2">
                  <div className="ques-votes">
                    <img src={upvote} alt="" width='18'/>
                    <p>{ques.upvotes - ques.downvotes}</p>
                    <img src={downvote} alt="" width='18'/>
                  </div>
                  <div style={{width:'100%'}}>
                    <p className='ques-body'>{ques.questionBody}</p>
                    <div className="ques-tag">
                      {ques.questionTag.map((tag) => (
                        <p key={tag}>{tag}</p>
                      ))}
                    </div>
                    <div className="ques-action-user">
                      <div>
                        <button type='button'>Share</button>
                        <button type='button'>Delete</button>
                      </div>
                      <div>
                        <p>asked on {ques.askedon}</p>
                        <Link to={`/user/${ques.userid}`} className='user-link'>
                          <Avtar backgroundColor='orange' px='8px' py='8px'>{ques.userpost.charAt(0).toUpperCase()}</Avtar>
                          <div>
                            {ques.userpost}
                          </div>
                        </Link>
                
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {
                ques.noOfanswer!==0 && (

                  <section>
                    <h3>{ques.noOfanswer} answers</h3>
                    <Displayans key={ques.id} question={ques}/>
                  </section>
                )
              }

              <section className='post-ans'>
                <h3>Your Answer</h3>
                <form>
                  <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                  <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                </form>
                <p>
                  Browse other question tags
                  {
                    ques.questionTag.map(tags=>(
                      <Link to='/Tag' key={tags}> {tags} </Link>
                    ))
                  }or{
                      <Link to='/Askquestion' style={{textDecoration:"none", color:"#009dff"}}> ask you own question</Link>
                  }
                </p>
              </section>

            </div>
          ))
        }
          
        </>
       }
    </div>
  )
}

export default Questiondetails
