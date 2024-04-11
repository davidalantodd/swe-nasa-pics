import NasaImage from './NasaImage'
import { DateContext } from '../contexts/DateContext'
import { useContext } from 'react'
import { readableDate } from '../utils/formatDate'

export default function DisplayPanel({ size, setSize }) {
  const { date } = useContext(DateContext)
  return (
    <div className='wrapper'>
      <h2>Display Panel</h2>
      <h3>{readableDate(date)}</h3>
      <NasaImage size={size} setSize={setSize} />
    </div>
  )
}
