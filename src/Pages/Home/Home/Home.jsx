import React from 'react'
import { Bannar } from '../Bannar/Bannar'
import { About } from '../About/About'
import { Services } from '../../Services/Services'


export const Home = () => {
  return (
    <div>
        <Bannar></Bannar>
        <div>
          <About/>
          <Services/>
          
        </div>
    </div>
  )
}

