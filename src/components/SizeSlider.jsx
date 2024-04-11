import { Slider } from '@mui/material'
// import our useContext and SizeContext
import { useContext } from 'react'
import { SizeContext } from '../contexts/SizeContext'

// remove accepted props
export default function SizeSlider() {
  // use useContext hook to consume our state, pass in our context instance
  const { size, setSize } = useContext(SizeContext)
  return (
    <Slider
      style={{ maxWidth: '300px' }}
      value={size}
      onChange={e => setSize(e.target.value)}
    />
  )
}
