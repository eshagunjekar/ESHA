import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon  from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work,index)=>{
            return <div  key={index} className='mywork-format'> 
            <img  src={work.w_img} alt="" />
            <h3>{work.w_no}</h3>
            <h2>{work.w_name}</h2>
            <p>{work.w_desc}</p>
            </div>
        })}
      </div>
      <br/>
      <br/><br/>
      <br/><br/>
      <br/>
    </div>
  )
}

export default MyWork
