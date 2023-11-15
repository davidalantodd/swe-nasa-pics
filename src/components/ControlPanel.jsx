import './ControlPanel.css'
import DatePicker from './DatePicker'
import SizeSlider from './SizeSlider'

//5. remove the accepted props here
export default function ControlPanel() {
  return (
    <div className='wrapper'>
      <h2>Control Panel</h2>
      <h3>Date</h3>
      <DatePicker />
      <h3>Size</h3>
      {/* 6. remove passed in props here*/}
      <SizeSlider />
    </div>
  )
}
