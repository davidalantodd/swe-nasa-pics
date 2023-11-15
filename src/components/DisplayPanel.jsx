import NasaImage from './NasaImage'
import { DateContext } from '../contexts/DateContext'
import { useContext } from 'react'
import { readableDate } from '../utils/formatDate'

//9. remove the accepted props here
export default function DisplayPanel() {
  const { date } = useContext(DateContext)
  return (
    <div className='wrapper'>
      <h2>Display Panel</h2>
      <h3>{readableDate(date)}</h3>
      {/* 9.5. remove passed in props here*/}
      <NasaImage />
    </div>
  )
}
