import { Slider } from '@mui/material'
import { SizeContext } from '../contexts/SizeContext'
import { useContext } from 'react'

// remove accepted props
export default function SizeSlider() {
  // import props using useContext (pass in context)
  const {size, setSize} = useContext(SizeContext)
  return (
    <Slider
      style={{ maxWidth: '300px' }}
      value={size}
      onChange={e => setSize(e.target.value)}
    />
  )
}
