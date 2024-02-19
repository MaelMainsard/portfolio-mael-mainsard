import { NavBar } from './sections/nav-bar'
import {SectionOne} from './sections/section-one'
import {SectionTwo} from './sections/section-two'
import {SectionThree} from './sections/section-three'
import {SectionFour} from './sections/section-four'
import {SectionFive} from './sections/section-five'
import { Footer } from './sections/footer'

import {Spacer} from "@nextui-org/react";

function App() {

  return (
    <>
     <NavBar/>
     <SectionOne/>
     <Spacer y={40} />
     <SectionTwo/>
     <Spacer y={40} />
     <SectionThree/>
     <Spacer y={40} />
     <SectionFour/>
     <Spacer y={20} />
     <SectionFive/>
     <Footer/>
    </>
  )
}

export default App
