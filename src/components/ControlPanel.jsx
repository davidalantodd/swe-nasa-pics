import './ControlPanel.css'
import DatePicker from './DatePicker'
import SizeSlider from './SizeSlider'

// remove accepted props
export default function ControlPanel() {
  return (
    <div className='wrapper'>
      <h2>Control Panel</h2>
      <h3>Date</h3>
      <DatePicker />
      <h3>Size</h3>
      {/* remove passed in props */}
      <SizeSlider />
    </div>
  )
}
