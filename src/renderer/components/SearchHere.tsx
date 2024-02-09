import React from 'react'
import mainlogo from '../assets/mainlogo.svg'
import sendlogo from '../assets/sendImg.svg'
import addNewLogo from '../assets/addNewLogo.svg'
import bottomLogo1 from '../assets/bottomlogo1.svg'
import bottomLogo2 from '../assets/bottomlogo2.svg'
import bottomLogo3 from '../assets/bottomlogo3.svg'

const SearchHere = () => {
  return (
    <>
        <div className='heading-container'>
          <img src={mainlogo} alt="logo" />
          <h1 style={{color:'rgba(191, 155, 181, 1)'}}>Insight Studio</h1>
        </div>
        <div className='search-container'>
        <input style={{
        borderRadius:'20px',
        width:'800px',
        height : '60px',
        fontSize: '20px',
        border: '3px solid rgba(236, 131, 187, 1)',
        boxShadow: '0px 0px 20px rgba(182, 100, 219, 1)'
        }} type="text" placeholder='Search for patient here..' />
        <button className="send-button">
        <img src={sendlogo} alt="Send" />
      </button>
        </div>
        <div className='addNew-container'>
        <button><img src={addNewLogo} alt="add new logo" /></button>
          <h3 style={{color:'rgba(191, 155, 181, 1)'}}>add new</h3>
        </div>
        <div className='footer-logo'>
            <div><a href=''><img src={bottomLogo1} alt="logo1" /></a><span style={{display:'block'}}>Open Canvas</span></div>
            <div><a href=''><img src={bottomLogo2} alt="logo2" /></a><span style={{display:'block'}}>Import Files</span></div>
            <div><a href=''><img src={bottomLogo3} alt="logo3" /></a><span style={{display:'block'}}>Set Dental 
            Prosthesis Images</span></div>
            
        </div>
        
    </>
  )
}

export default SearchHere
