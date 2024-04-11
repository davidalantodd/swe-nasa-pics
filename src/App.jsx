import { useState } from 'react'
// components
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import DisplayPanel from './components/DisplayPanel'
// contexts
import { DateContext } from './contexts/DateContext'

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)
  return (
    <>
      <Header />
      <main>
        <DateContext.Provider value={{ date, setDate }}>
          <ControlPanel size={size} setSize={setSize} />
          <DisplayPanel size={size} />
        </DateContext.Provider>
      </main>
    </>
  )
}

export default App
