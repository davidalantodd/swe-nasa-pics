import { Slider } from '@mui/material'
import { SizeContext } from '../contexts/SizeContext'
import { useContext } from 'react'

// 7. remove accepted props here
export default function SizeSlider() {

  //8. import props using useContext, passing in our context
  const {size, setSize} = useContext(SizeContext)

  return (
    <Slider
      style={{ maxWidth: '300px' }}
      value={size}
      onChange={e => setSize(e.target.value)}
    />
  )
}
