import { Slider } from '@mui/material'

export default function SizeSlider({ size, setSize }) {
  return (
    <Slider
      style={{ maxWidth: '300px' }}
      value={size}
      onChange={e => setSize(e.target.value)}
    />
  )
}
