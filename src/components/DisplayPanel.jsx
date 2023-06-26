import NasaImage from './NasaImage'
import { readableDate } from '../utils/formatDate'

export default function DisplayPanel({ date, size }) {
  return (
    <div className='wrapper'>
      <h2>Display Panel</h2>
      <h3>{readableDate(date)}</h3>
      <NasaImage date={date} size={size} />
    </div>
  )
}
