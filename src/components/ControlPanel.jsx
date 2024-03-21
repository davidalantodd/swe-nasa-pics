import './ControlPanel.css'
import DatePicker from './DatePicker'
import SizeSlider from './SizeSlider'

export default function ControlPanel({ size, setSize }) {
  return (
    <div className='wrapper'>
      <h2>Control Panel</h2>
      <h3>Date</h3>
      <DatePicker />
      <h3>Size</h3>
      <SizeSlider size={size} setSize={setSize} />
    </div>
  )
}
