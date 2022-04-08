import styled from 'styled-components'

import Header from "./header/Header"
import ContactMe from "./contact-me/ContactMe"
import SideBar from "./side-bar/SideBar"

import Skills from './categories/skills/Skills'

const BlockSide = styled.div`
  margin: 0 50px;
`

const catogories = [
  { title: 'Skills', active: false },
  { title: 'Proyects', active: false },
  { title: 'About Me', active: false },
  { title: 'Contact', active: false }
]

const App = () => {
  return (
    <div>
      <ContactMe></ContactMe>
      <Header></Header>
      <SideBar catogories={ catogories } ></SideBar>
      
      <BlockSide>
        <Skills></Skills>
      </BlockSide>
    </div>
  )
}

export default App;
