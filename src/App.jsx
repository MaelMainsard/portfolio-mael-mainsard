import { useState } from 'react'
import { NavBar } from './sections/nav-bar'
import {SectionOne} from './sections/section-one'
import {SectionTwo} from './sections/section-two'
import {SectionThree} from './sections/section-three'

function App() {

  return (
    <>
     <NavBar/>
     <SectionOne/>
     <SectionTwo/>
     <SectionThree/>
    </>
  )
}

export default App
