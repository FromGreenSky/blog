import { Navbar } from './components/Navbar/Navbar'
import './App.css'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Contacts } from './components/Contacts/Contacts'

export default function App(){
  return(
    <div className = 'container'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </div>
  )
}