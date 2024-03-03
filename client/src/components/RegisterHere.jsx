import React from 'react'
import { Button } from 'flowbite-react';
import {Link} from 'react-router-dom'
export default function RegisterHere () {
  return (
        <Link to={'https://forms.gle/thzvBBVYLB6GTTxC8'} className='text-decoration-none'>
          <Button gradientDuoTone="purpleToBlue" size='lg' pill className='font-bold font-mono'>REGISTER HERE!!</Button>
        </Link>
  )
}
