import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './Homesidebar.css';
import Questionslist from './Questionslist';

const Homesidebar = () => {

  const questionslist=[{
    _id:1,
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
    _id:2,
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
    _id:3,
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

  const location = useLocation()

  const user=1;
    const navigate=useNavigate();


    const changeauth=()=>{
      if(user===null){
        alert('Login or signup')
        navigate('/Auth')
      }else{
        navigate('/Askquestion')
      }
    }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        <p>{location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>}</p>
        <button onClick={changeauth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {questionslist===null?<h1>Loading....</h1>:
        <>
          <p>{questionslist.length} questions</p>
          <Questionslist questionslist={questionslist}/>
        </>
          
        }
      </div>
    </div>
  )
}

export default Homesidebar
