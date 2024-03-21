import { useState } from 'react'
// components
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import DisplayPanel from './components/DisplayPanel'
// contexts
import { DateContext } from './contexts/DateContext'
import { SizeContext } from './contexts/SizeContext'

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)
  return (
    <>
      <Header />
      <main>
        <DateContext.Provider value={{ date, setDate }}>
          <SizeContext.Provider value={{ size, setSize }}>
            <ControlPanel />
            <DisplayPanel />
          </SizeContext.Provider>
        </DateContext.Provider>
      </main>
    </>
  )
}

export default App
