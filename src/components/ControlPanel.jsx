import './ControlPanel.css'
import DatePicker from './DatePicker'
import SizeSlider from './SizeSlider'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useState } from 'react'

export default function ControlPanel({ date, setDate, size, setSize }) {
  const [value, setValue] = useState(2);

  return (
    <div className='wrapper'>
      <h2>Control Panel</h2>
      <h3>Date</h3>
      <DatePicker date={date} setDate={setDate} />
      <h3>Size</h3>
      <SizeSlider size={size} setSize={setSize} />
      <Button variant="contained">I'm a button!</Button>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  )
}
