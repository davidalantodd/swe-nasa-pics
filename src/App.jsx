import { useState } from 'react'
// components
import Header from './components/Header'
import ControlPanel from './components/ControlPanel'
import DisplayPanel from './components/DisplayPanel'
// contexts
import { DateContext } from './contexts/DateContext'
// 3. import SizeContext from contexts
import { SizeContext } from './contexts/SizeContext'

function App() {
  const [date, setDate] = useState(new Date())
  const [size, setSize] = useState(100)
  return (
    <>
      <Header />
      <main>
      {/* 4. Wrap the two components that need the state in the SizeContext provider, and remove the props*/}
        <SizeContext.Provider value= {{size, setSize}}>
          <DateContext.Provider value={{ date, setDate }}>
            {/* Remove props from these components since they are now witihn the provider */}
            <ControlPanel/>
            <DisplayPanel />
          </DateContext.Provider>
        </SizeContext.Provider>
      </main>
    </>
  )
}

export default App
