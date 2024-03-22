import { useState } from 'react'
// components
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import DisplayPanel from './components/DisplayPanel'
// contexts
import { DateContext } from './contexts/DateContext'
// import SizeContext
import { SizeContext } from './contexts/SizeContext'

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)
  return (
    <>
      <Header />
      <main>
        {/* wrap our components that need the state with our context provider, we can also remove the props*/}
        <SizeContext.Provider value={{ size, setSize }}>
          <DateContext.Provider value={{ date, setDate }}>
            <ControlPanel/>
            <DisplayPanel/>
          </DateContext.Provider>
        </SizeContext.Provider>
      </main>
    </>
  )
}

export default App
