import React from 'react'
import download from '../images/download.png'
export default function HeadingLogo() {
  return (
    <div className='mx-auto mt-4 mb-4 '>
        <div className='flex flex-wrap gap-4 '>
            <div className=' flex flex-col justify-center items-center'>
                <h4 className='bold italic text-4xl'>Welcome To Escapade</h4>
                <p>An event organised by ECE department</p>
            </div>
            <div className=''>
                <img src={download}/>
            </div>
        </div>
        
    </div>
  )
}
