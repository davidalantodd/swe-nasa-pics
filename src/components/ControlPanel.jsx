import './ControlPanel.css'
import DatePicker from './DatePicker'
import SizeSlider from './SizeSlider'

export default function InteractionPane() {
  return (
    <div className='wrapper'>
      <h2>Control Panel</h2>
      <h3>Date</h3>
      <DatePicker />
      <h3>Size</h3>
      <SizeSlider />
    </div>
  )
}
