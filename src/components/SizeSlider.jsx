import { Slider } from '@mui/material'
import { SizeContext } from '../contexts/SizeContext'
import { useContext } from 'react'

export default function SizeSlider() {
  const { size, setSize } = useContext(SizeContext)

  return (
    <Slider
      style={{ maxWidth: '300px' }}
      value={size}
      onChange={e => setSize(e.target.value)}
    />
  )
}
