import './ControlPanel.css'
import DatePicker from './DatePicker'
import SizeSlider from './SizeSlider'

export default function ControlPanel({ date, setDate, size, setSize }) {
  return (
    <div className='wrapper'>
      <h2>Control Panel</h2>
      <h3>Date</h3>
      <DatePicker date={date} setDate={setDate} />
      <h3>Size</h3>
      <SizeSlider size={size} setSize={setSize} />
    </div>
  )
}
