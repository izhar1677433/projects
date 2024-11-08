import React from 'react'

const contact = () => {
  return (
    <div className='conatct-page-wrapper'>
        <h1 className='primary-heading'>Have Question In Mind?</h1>
        <h1 className='primary-heading'>Let Us Help You</h1>
        <div className="contact-from-container">
            <input type="text" placeholder='your@gmail.com' className='gmail' />
            <button className='secondary-button'>Submit</button>
        </div>

    </div>
  )
}

export default contact